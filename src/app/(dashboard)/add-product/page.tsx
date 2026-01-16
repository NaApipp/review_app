"use client";

import { useAuth } from "../AuthProvider";
import AddProductPage from "./components/addProduct";
import ListProduct from "./components/listProduct";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function page() {
  const { user, isLoading } = useAuth();

  return (
    <>
      <div className="bg-[#0C2B4E] min-h-screen flex flex-col justify-center items-center gap-4">
        <Navbar />
        <div className="mt-20 bg-[#0C2B4E]">
          <AddProductPage />
        </div>
        <Link
          href="/login"
          className="bg-[#1A3D64] hover:bg-[#1A3D64]/60 font-bold text-white pl-5 pr-5 pt-3 pb-3 rounded-2xl"
        >
          Lihat List Produk
        </Link>
      </div>
    </>
  );
}
