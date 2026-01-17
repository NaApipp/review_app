import clientPromise from "@/app/lib/mongodb";
import Link from "next/link";
import Header from "./components/Header";
import Product from "@/app/models/Product";

// async function getProducts() {
//   const res = await fetch("/api/main/product", {
//     cache: "no-store"
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();
// }

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const params = await searchParams; // ⬅️ WAJIB
  const page = Number(params?.page) || 1;

  const client = await clientPromise;
  const db = client.db("review_app");

  const limit = 20;
  const skip = (page - 1) * limit;

  const [products, totalProducts] = await Promise.all([
    db.collection("product").find({}).skip(skip).limit(limit).toArray(),
    db.collection("product").countDocuments(),
  ]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="p-6 bg-[#1A3D64] min-h-screen text-white">
      <Header />
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Daftar Produk</h1> */}

      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-slate-100">
          <tr className="text-slate-700 text-sm uppercase tracking-wide">
            <th className="px-6 py-4 text-center">ID Produk</th>
            <th className="px-6 py-4 text-center">Image</th>
            <th className="px-6 py-4 text-center">Nama Produk</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {products.map((product: any) => (
            <tr
              key={product.productId}
              className="hover:bg-[#0C2B4E] transition-colors"
            >
              <td className="px-6 py-4 font-medium text-white">
                {product.productId}
              </td>

              <td className="px-6 py-4">
                <img
                  src={product.imageUrl}
                  alt={product.produkName}
                  className="w-20 h-20 object-cover rounded-lg shadow"
                />
              </td>

              <td className="px-6 py-4 text-white">{product.produkName}</td>

              <td className="px-6 py-4">
                <a
                  href={`/beranda/${product.productId}`}
                  className="inline-flex items-center justify-center bg-[#1D546C] hover:bg-[#163F52] text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  Review Produk
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div
            key={product.productId}
            className="flex flex-col gap-4 justify-center items-center border rounded-2xl p-4 shadow"
          >
            <img
              src={product.imageUrl}
              alt="{product.produkName}"
              className="rounded items-center"
            />
            <h2 className="font-semibold text-lg text-center">
              {product.produkName}
            </h2>

            <p className="text-sm text-gray-500 text-white ">
              Platform: <span className="">{product.platform}</span>
            </p>

            <a
              href={`/beranda/${product.productId}`}
              className="inline-block mt-4 bg-[#1D546C] hover:bg-[#1D546C]/60 text-white px-4 py-2 rounded"
            >
              Review Produk
            </a>
          </div>
        ))}
      </div> */}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <a
          href={`?page=${page - 1}`}
          className={`px-4 py-2 border rounded ${
            page <= 1
              ? "cursor-not-allowed text-gray-400 bg-[#1D546C] " // Disable (Halaman Habis)
              : "cursor-pointer bg-[#0C2B4E] hover:bg-[#0C2B4E]/60 text-white " //Enable {Halaman Ada}
          }`}
        >
          Previous
        </a>

        <span>
          Page {page} of {totalPages}
        </span>

        <a
          href={`?page=${page + 1}`}
          className={`px-4 py-2 border rounded ${
            page >= totalPages
              ? "cursor-not-allowed text-gray-400 bg-[#1D546C] " // Disable (Halaman Habis)
              : "cursor-pointer bg-[#0C2B4E] hover:bg-[#0C2B4E]/60 text-white " //Enable {Halaman Ada}
          }`}
        >
          Next
        </a>
      </div>
    </div>
  );
}
