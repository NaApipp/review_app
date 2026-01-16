import clientPromise from "@/app/lib/mongodb";
import ReviewForm from "./ReviewForm";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const client = await clientPromise;
  const db = client.db("review_app");

  const product = await db.collection("product").findOne({ productId });

  if (!product) {
    return <div>Product tidak ditemukan</div>;
  }

  const reviews = await db
    .collection("reviews")
    .find({ productId })
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className="bg-[#0C2B4E] flex flex-col items-center p-4 w-1/2">
          <h1 className="text-center font-black">{product.produkName}</h1>

          <h2 className="font-semibold mt-5 underline underline-offset-4">Review Produk</h2>
          {/* Jika belum ada review */}
          {reviews.length === 0 && (
            <p className="mt-4 text-gray-400">
              Belum ada review untuk produk ini.
            </p>
          )}

          <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
            {reviews.map((r: any) => (
            <div className="text-white mt-3 border p-2 rounded-2xl flex flex-col gap-2 font-bold"  key={r._id}>
              <p className="text-center">Bintang: ⭐ {r.rating}</p>
              <p>Ulasan: {r.review}</p>
              <p>Reviewer: {r.reviewer}</p>
              {/* ⭐ {r.rating} — "{r.review}" from {r.reviewer} */}
            </div>
          ))}
          </div>
        </div>
        <div className="bg-[#1A3D64] flex flex-col justify-center items-center w-1/2">
            <ReviewForm productId={productId} />
            <Link href="/beranda" className="bg-[#0C2B4E] hover:bg-[#0C2B4E]/60 font-bold p-3 rounded-2xl mt-3">Kembali Ke Beranda</Link>
        </div>
      </div>
    </>
    // <div className="p-6 max-w-3xl mx-auto">
    //   <h1 className="text-2xl font-bold">
    //     {product.produkName}
    //   </h1>

    //   <h2 className="mt-6 font-semibold">Reviews</h2>

    //      {/* Jika belum ada review */}
    //   {reviews.length === 0 && (
    //     <p className="mt-4 text-gray-400">
    //       Belum ada review untuk produk ini.
    //     </p>
    //   )}

    //   {reviews.map((r: any) => (
    //     <div className="text-white" key={r._id}>
    //       ⭐ {r.rating} — "{r.review}" from {r.reviewer}
    //     </div>
    //   ))}

    //   <ReviewForm productId={productId} />
    // </div>
  );
}
