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
      <div className="flex md:flex-row flex-col min-h-screen">
        <div className="bg-[#0C2B4E] p-7 justify-between items-center gap-7 flex flex-row md:hidden">
          <Link href={"/beranda"}>
            <svg
              className="w-9 h-9 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
          <h1 className="font-bold text-xl">
            Detail Produk
          </h1>
          <div className="w-6"></div>
        </div>
        {/* Main Container [Left->Desktop] */}
        <div className="bg-[#0C2B4E] flex flex-col items-center p-4 md:w-1/2">
          {/* Container Detail Produk */}
          <div className="max-w-xl w-full">
            {/* Container Deskripsi Produk */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Image */}
              <img
                src={product.imageUrl}
                alt={product.produkName}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />

              {/* Product Info */}
              <div className="flex flex-col gap-3 text-white">
                <span className="text-sm uppercase tracking-wide text-white/90">
                  {product.platform}
                </span>

                <h2 className="text-xl font-semibold leading-snug">
                  {product.produkName}
                </h2>

                <p className="text-lg font-bold text-emerald-300">
                  Rp {product.price}
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={product.linkProduk}
                  className="mt-2 inline-flex items-center justify-center w-fit px-4 py-2 rounded-lg bg-white text-[#0C2B4E] text-sm font-medium hover:bg-white/90 transition"
                >
                  Lihat di {product.platform}
                </a>
              </div>
            </div>
          </div>

          {/* Container Ulasan */}
          <div className="mt-8">
            <h2 className="text-center text-xl font-semibold text-white">
              Ulasan Produk
            </h2>

            {/* Jika belum ada review */}
            {reviews.length === 0 && (
              <p className="mt-4 text-gray-400 text-center">
                Belum ada review untuk produk ini.
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              {reviews.map((r: any) => (
                <div
                  key={r._id}
                  className="bg-white/10 backdrop-blur rounded-xl p-4 text-white transition-transform duration-300 ease-out hover:scale-[1.03]"
                >
                  {/* Header review */}
                  <div className="flex items-center gap-3 mb-2">
                    {/* Avatar kosong */}
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white/70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2a6 6 0 100 12 6 6 0 000-12zm-9 18a9 9 0 0118 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Nama & rating */}
                    <div className="flex flex-col">
                      <span className="font-medium">{r.reviewer}</span>
                      <span className="text-sm text-yellow-400">
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </span>
                    </div>
                  </div>

                  {/* Isi review */}
                  <p className="text-sm text-white/90 leading-relaxed">
                    {r.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Container Tambah Ulasan [Right -> Desktop] */}
        <div className="bg-[#1A3D64] flex flex-col justify-center items-center md:w-1/2">
          <ReviewForm productId={productId} />
          <Link
            href="/beranda"
            className="bg-[#0C2B4E] hover:bg-[#0C2B4E]/60 font-bold p-3 m-4 mt-4 rounded-2xl hidden md:block"
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
}
