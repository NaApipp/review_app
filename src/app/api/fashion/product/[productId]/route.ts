import clientPromise from "@/app/lib/mongodb";

export async function GET(
  req: Request,
  context: { params: Promise<{ productId: string }> }
) {
  const { productId } = await context.params;

  const client = await clientPromise;
  const db = client.db("review_app");
  
  // 1️⃣ get product
  const product = await db
    .collection("fashion")
    .findOne({ productId });

  if (!product) {
    return Response.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  // 2️⃣ get reviews
  const reviews = await db
    .collection("reviews_fashion")
    .find({ productId })
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json({
    ...product,
    reviews
  });
}
