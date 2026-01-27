// Import Models Product and Review
import Product from "@/app/model-laptop/Product";
import Review from "@/app/model-laptop/Product";


import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("review_app");

  const products = await db
    .collection("fashion")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(products);
}
