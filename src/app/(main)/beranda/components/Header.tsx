"use client";
import Link from "next/link";
import { useAuth } from "../../AuthProvider";

export default function Header() {
  const {logout} = useAuth();

    return (    
        <div className="flex md:flex-row md:gap-0 flex-col gap-3 items-center justify-between mb-5">
        <h1 className="md:text-2xl font-bold">Daftar Produk</h1>
        <Link
          href="/login"
          onClick={logout}
          className="block py-2 px-3 bg-[#1D546C] hover:bg-[#1D546C]/60 text-white text-heading rounded hover:bg-neutral-tertiary  md:p-3"
        >
          Logout
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