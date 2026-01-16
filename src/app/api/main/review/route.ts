import clientPromise from "@/app/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();
  const { productId, rating, review, reviewer } = body;

  if (!productId || !rating || !review || !reviewer) {
    return Response.json(
      { message: "Invalid payload" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("review_app");

  // cek product
  const product = await db
    .collection("product")
    .findOne({ productId });

  if (!product) {
    return Response.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  await db.collection("reviews").insertOne({
    productId,
    rating,
    review,
    reviewer,
    createdAt: new Date()
  });

  return Response.json(
    { message: "Review added successfully" },
    { status: 201 }
  );
}

