"use cliet"
import Link from "next/link";

export default function Header() {

    return (    
        <div className="flex flex-row items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Daftar Produk</h1>
        <Link
          href="/on-boarding"
          className="block py-2 px-3 bg-[#1D546C] hover:bg-[#1D546C]/60 text-white text-heading rounded hover:bg-neutral-tertiary  md:p-3"
        >
          Kembali Ke Halaman Utama
        </Link>
        {/* <Link
          href="/login"
          onClick={logout}
          className="block py-2 px-3 bg-[#CF0F0F] hover:bg-[#CF0F0F]/60 text-white text-heading rounded hover:bg-neutral-tertiary  md:p-3"
        >
          Logout
        </Link> */}
      </div>
    )
}