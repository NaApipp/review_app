import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
export const runtime = "nodejs";

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




// async function getNextProductId(): Promise<number> {
//   const client = await clientPromise;
//   const db = client.db("review_app");
//   const counters = db.collection<Counter>("counters");

//   // Upsert + increment
//   await counters.updateOne(
//     { _id: "product" },
//     { $inc: { seq: 1 }, $setOnInsert: { seq: 0 } },
//     { upsert: true }
//   );

//   // Ambil dokumen terbaru secara manual
//   const doc = await counters.findOne({ _id: "product" });
//   if (!doc || typeof doc.seq !== "number") {
//     throw new Error("Counter document not found or seq invalid");
//   }

//   return doc.seq;
// }



export async function POST(request: Request) {
  try {
    const body = await request.json();
    const products = Array.isArray(body) ? body : [body];

    const client = await clientPromise;
    const db = client.db("review_app");
    const collection = db.collection("laptop");

    const formattedDate = formatDateWIB(new Date());

    const docs = products.map((item) => ({
      productId: item.kodeProduk.trim(),
      platform: item.platform.trim(),
      produkName: item.produkName.trim(),
      linkProduk: item.linkProduk.trim(),
      price: Number(item.price),
      imageUrl: item.imageUrl.trim(),
      createdAt: formattedDate,
    }));

    const result = await collection.insertMany(docs, {
      ordered: false, // lanjut walau ada duplikat
    });

    return NextResponse.json(
      {
        success: true,
        insertedCount: result.insertedCount,
        insertedIds: result.insertedIds,
      },
      { status: 201 }
    );

  } catch (error: any) {
    // Block Dupliacate Produk ID
    if (error.code === 11000) {
      return NextResponse.json(
        {
          errorCode: "DUPLICATE_KODE",
          message: "Terdapat kode produk yang sudah ada",
        },
        { status: 409 }
      );
    }

    console.error("POST /add_laptop:", error);
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
    const collection = db.collection("laptop");
    
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
    console.error("GET /laptop:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}

