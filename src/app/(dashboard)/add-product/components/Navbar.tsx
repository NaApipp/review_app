"use client"

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../AuthProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const close = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#102D41]">
      {/* bar atas */}
      <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 relative">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="self-center text-xl text-heading font-poppins font-semibold whitespace-nowrap">
            Hi, <span>{user?.username}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-solid"
          aria-expanded={open}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* menu */}
        <div
          id="navbar-solid"
          className={`
            ${open ? "block" : "hidden"}
            absolute top-16 left-0 right-0
            md:static md:block md:w-auto
            bg-[#102D41]
          `}
        >
          <ul className="
            font-semibold font-poppins
            flex flex-col
            p-4
            rounded-2xl
            bg-neutral-secondary-soft
            md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse
            md:p-0 md:border-0 md:bg-transparent
          ">
            <li>
              <Link
                href="/dashboard"
                onClick={logout}
                className="block py-2 px-3 bg-red-400 text-heading rounded hover:bg-neutral-tertiary  md:p-3"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
