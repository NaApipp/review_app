"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authStorageKeys } from "../../AuthProvider";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/main/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Login gagal");
        return;
      }

      const data = (await res.json()) as { token: string };
      localStorage.setItem(authStorageKeys.TOKEN_KEY, data.token);
      localStorage.setItem(
        authStorageKeys.LAST_ACTIVITY_KEY,
        String(Date.now())
      );

      router.replace("/beranda-handphone");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE – HERO */}
        <div className="relative hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-[#071c2f] to-[#0c2f4f] text-white">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              📱
            </div>
            <span className="font-semibold text-lg">Sector Handphone</span>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Review Product
              <br /> Sector Handphone.
            </h1>
            <p className="mt-4 max-w-md text-white/80">
              Bagikan pengalaman Anda menggunakan produk kami dan lihat ulasan
              dari pelanggan lain untuk membantu meningkatkan kualitas layanan
              <span className="text-[#00F7FF] font-semibold"> Sector Handphone.</span>{" "}
            </p>
          </div>

          {/* Footer button direct*/}
          <Link href={"/handphone-sector"} className="flex flex-row w-max rounded-2xl items-center p-2 text-sm text-white/70 bg-blue-500 hover:bg-blue-600 transition-colors">
            <svg
              className="w-8 h-8 text-white dark:text-white"
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

            <p
              className="  text-white cursor-pointer font-semibold py-2 px-4 rounded-md "
            >
              Kembali
            </p>
          </Link>
        </div>

        {/* RIGHT SIDE – LOGIN FORM */}
        <div className="flex items-center justify-center px-6 bg-gradient-to-br from-[#0F2854] to-[#1C4D8D]">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mt-2">Sector Handphone Login</h2>
              <p className="text-gray-500 mt-2">
                Masukkan identitas-mu untuk me-review produk-produk dari kami.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={onSubmit}>
              {/* Username */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Masukkan username..."
                  className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-bold">Password</label>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Masukkan password..."
                  className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  autoComplete="off"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white cursor-pointer font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                {loading ? "Loading..." : "Login Review"}
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-sm text-center text-gray-500">
              Tidak memiliki aksess?{" "}
              <span className="text-blue-500 font-medium ">
                Hubungi Developer
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
