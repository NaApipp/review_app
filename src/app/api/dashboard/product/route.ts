import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

interface Counter {
  _id: string;
  seq: number;
}



// Format date to "DD/MM/YYYY HH:MM:SS"  For Message Date
function formatDateWIB(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  return `${map.day}/${map.month}/${map.year} ${map.hour}:${map.minute}:${map.second}`;
}



// Function to get the next product_id using a counters collection
async function getNextProductId(): Promise<number> {
  const client = await clientPromise;
  const db = client.db("review_app");

  const counters = db.collection<Counter>("counters");

  const result = await counters.findOneAndUpdate(
    { _id: "product" },
    { $inc: { seq: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  if (result.value) {
    return result.value.seq;
  }

  // fallback jika value null (upsert pertama)
  const counter = await counters.findOne({ _id: "product" });

  if (!counter) {
    throw new Error("Counter document not found after upsert");
  }

  return counter.seq;
}




export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { platform, produkName, linkProduk, price, imageUrl, createdAt } = body;

    const client = await clientPromise;
    const db = client.db("review_app");
    const collection = db.collection("product");

    const productId = await getNextProductId();
    const formattedDate = formatDateWIB(new Date());
    
    const result = await collection.insertOne({
      productId: productId,
      platform: platform.trim(),
      produkName: produkName.trim(),
      linkProduk: linkProduk.trim(),
      price: Number(price),
      imageUrl: imageUrl.trim(),
      createdAt: formattedDate,
    });

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
        productId: productId,
      },
      { status: 200 }
    );

    
  } catch (error) {
    console.error("POST /add_product:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productIdParam = searchParams.get("product_id");

    const client = await clientPromise;
    const db = client.db("review_app");
    const collection = db.collection("product");
    
    // Jika product_id tidak ada → ambil semua
    if (!productIdParam) {
      const products = await collection
        .find({})
        .sort({ product_id: -1 })
        .toArray();

      return NextResponse.json(
        {
          success: true,
          data: products,
        },
        { status: 200 }
      );
    }

    // Validasi product_id
    const productId = Number(productIdParam);

    if (Number.isNaN(productId)) {
      return NextResponse.json(
        {
          errorCode: "INVALID_PRODUCT_ID",
          message: "product_id harus berupa angka",
        },
        { status: 400 }
      );
    }

    const product = await collection.findOne({ product_id: productId });

    if (!product) {
      return NextResponse.json(
        {
          errorCode: "NOT_FOUND",
          message: "Produk tidak ditemukan",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: product,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /product:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}

