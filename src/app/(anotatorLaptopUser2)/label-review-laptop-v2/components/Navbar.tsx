"use client";

import Link from "next/link";
import { useAuth } from "../../AuthProvider";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1>Daftar Review Laptop</h1>
        <h1 className="font-extrabold">Anotator Review Sector Laptop V2</h1>
        <Link
          href="/login-anotator-laptop-v2"
          onClick={logout}
          className="block py-2 px-3 bg-[#CF0F0F] hover:bg-[#CF0F0F]/60 text-white text-heading rounded hover:bg-neutral-tertiary  md:p-3"
        >
          Logout
        </Link>
      </div>
    </>
  );
}
