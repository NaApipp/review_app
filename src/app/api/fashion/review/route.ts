// app/api/reviews/route.ts
import clientPromise from "@/app/lib/mongodb";

/* =======================
   Helper Response
======================= */
function errorResponse(message: string, status = 400) {
  return Response.json({ message }, { status });
}

/* =======================
   Format date to "DD/MM/YYYY HH:MM:SS"  For Message Date
======================= */
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

/* =======================
   Validation Helpers
======================= */
function isNonEmptyString(value: any) {
  return typeof value === "string" && value.trim().length > 0;
}

function containsMongoOperator(value: any) {
  return typeof value === "object" && value !== null;
}

/* =======================
   POST Handler
======================= */
export async function POST(req: Request) {
  // 1️⃣ Parse JSON
  let body: any;
  try {
    body = await req.json();
  } catch {
    return errorResponse("Payload JSON tidak valid", 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return errorResponse("Format payload tidak valid", 400);
  }

  const { productId, rating, review, reviewer } = body;
  // hanya huruf, angka, underscore, titik (boleh kamu sesuaikan)
  const USERNAME_REGEX = /^[a-zA-Z0-9._]+$/;

  // 2️⃣ Required fields
  if (
    productId === undefined ||
    rating === undefined ||
    review === undefined ||
    reviewer === undefined
  ) {
    return errorResponse(
      "Payload tidak valid: field yang dibutuhkan hilang",
      400,
    );
  }

  // 3️⃣ Prevent MongoDB Injection
  if (containsMongoOperator(productId) || containsMongoOperator(reviewer)) {
    return errorResponse("Input tidak valid terdeteksi", 400);
  }

  // 4️⃣ Type & empty validation
  if (!isNonEmptyString(productId)) {
    return errorResponse(
      "productId harus berupa string yang tidak kosong",
      400,
    );
  }

  if (!Number.isInteger(rating)) {
    return errorResponse("rating harus berupa bilangan bulat", 400);
  }

  if (!isNonEmptyString(review)) {
    return errorResponse("review harus berupa string yang tidak kosong", 400);
  }

  if (!isNonEmptyString(reviewer)) {
    return errorResponse("reviewer harus berupa string yang tidak kosong", 400);
  }

  // 5️⃣ Rating range
  if (rating < 1 || rating > 5) {
    return errorResponse("rating harus berada di antara 1 dan 5", 400);
  }

  // 6️⃣ Length validation
  if (review.length < 5) {
    return errorResponse("review harus minimal 5 karakter", 400);
  }

  if (review.length > 500) {
    return errorResponse("review tidak boleh melebihi 500 karakter", 400);
  }

  if (reviewer.length > 100) {
    return errorResponse("reviewer tidak boleh melebihi 100 karakter", 400);
  }

  // Validation special character
  if (!USERNAME_REGEX.test(reviewer)) {
    return errorResponse("Nama tidak boleh menggunakan karakter spesial", 400);
  }

  // 7️⃣ Database
  try {
    const client = await clientPromise;
    const db = client.db("review_app");

    // 8️⃣ Check product
    const product = await db.collection("fashion").findOne({ productId });

    if (!product) {
      return errorResponse("Produk tidak ditemukan", 404);
    }

    const formattedDate = formatDateWIB(new Date());


    // 🔟 Insert review
    await db.collection("reviews_fashion").insertOne({
      productId,
      rating,
      review: review.trim(),
      reviewer: reviewer.trim(),
      createdAt: formattedDate,
    });

    return Response.json(
      { message: "Review added successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /reviews_fashion error:", error);
    return errorResponse("Kesalahan server internal", 500);
  }
}



export async function GET() {
  const client = await clientPromise;
  const db = client.db("review_app");

  const products = await db
    .collection("reviews_fashion")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(products);
}
