import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
export const runtime = "nodejs";

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


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const products = Array.isArray(body) ? body : [body];

    const client = await clientPromise;
    const db = client.db("review_app");
    const collection = db.collection("dataset_handphone");

    const formattedDate = formatDateWIB(new Date());

    const docs = products.map((item) => ({
  reviewId: String(item.reviewId).trim(),
  review: String(item.review).trim(),
  label: String(item.label).trim(),
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

    console.error("POST /dataset_handphone:", error);
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
    const productIdParam = searchParams.get("reviewId");

    const client = await clientPromise;
    const db = client.db("review_app");
    const collection = db.collection("dataset_handphone");
    
    // Jika reviewId tidak ada → ambil semua
    if (!productIdParam) {
      const products = await collection
        .find({})
        .sort({ reviewId: -1 })
        .toArray();

      return NextResponse.json(
        {
          success: true,
          data: products,
        },
        { status: 200 }
      );
    }

    // Validasi reviewId
    const productId = Number(productIdParam);

    if (Number.isNaN(productId)) {
      return NextResponse.json(
        {
          errorCode: "INVALID_reviewId",
          message: "reviewId harus berupa angka",
        },
        { status: 400 }
      );
    }

    const product = await collection.findOne({ reviewId: productId });

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
    console.error("GET /dataset_handphone:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}

