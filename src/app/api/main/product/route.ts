import Product from "@/app/models/Product";
import Review from "@/app/models/Review";
import clientPromise from "@/app/lib/mongodb";

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ productId: string }> }
// ) {
//   const { productId } = await context.params;

//   const client = await clientPromise;
//   const db = client.db("review_app");

//   const product = await db
//     .collection("product")
//     .findOne({ productId });

//   if (!product) {
//     return Response.json(
//       { message: "Product not found" },
//       { status: 404 }
//     );
//   }

//   return Response.json(product);
// }

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ productId: string }> }
// ) {
//   const { productId } = await context.params;

//   const client = await clientPromise;
//   const db = client.db("review_app");

//   // 1️⃣ ambil product
//   const product = await db
//     .collection("products")
//     .findOne({ productId });

//   if (!product) {
//     return Response.json(
//       { message: "Product not found" },
//       { status: 404 }
//     );
//   }

//   // 2️⃣ ambil reviews
//   const reviews = await db
//     .collection("reviews")
//     .find({ productId })
//     .sort({ createdAt: -1 })
//     .toArray();

//   return Response.json({
//     ...product,
//     reviews
//   });
// }

export async function GET() {
  const client = await clientPromise;
  const db = client.db("review_app");

  const products = await db
    .collection("product")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(products);
}
