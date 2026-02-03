"use client";

// import library
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Lucide
import { MessageSquareText } from 'lucide-react';


// Import Auth Provider
import { authStorageKeys } from "../../AuthProvider";

export default function LoginForm() {
  // Create Router for direct page 
  const router = useRouter();

  // Create varible for login system
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Create Controller for login system
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Fetech API login
    try {
      const res = await fetch("/api/anotator-user2/anotator-fashion/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),  // with a body username and password
      });


      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Login gagal");
        return;
      }

      // Token storage system
      const data = (await res.json()) as { token: string };
      sessionStorage.setItem(authStorageKeys.TOKEN_KEY, data.token);
      sessionStorage.setItem(
        authStorageKeys.LAST_ACTIVITY_KEY,
        String(Date.now())
      );

      router.replace("/label-review-fashion-v2");
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
              <MessageSquareText />
            </div>
            <span className="font-semibold text-lg">Portal Login User V2</span>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Anotator Review Product
              <br /> Sector Fashion V2.
            </h1>
            <p className="mt-4 max-w-md text-white/80">
              Berikan penilaian Anda dan bantu tingkatkan kualitas layanan kami pada
              <span className="text-[#00F7FF] font-semibold"> Sector Fashion.</span>{" "}
            </p>
          </div>

          {/* Footer button direct*/}
          <Link href={"/fashion-sector"} className="flex flex-row w-max rounded-2xl items-center p-2 text-sm text-white/70 bg-blue-500 hover:bg-blue-600 transition-colors">
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
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mt-2">Anotator Portal Login <br />
               <span className="text-[#00F7FF] font-semibold">Sector fashion V2</span>
              </h2>
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
    // <>
    //   <div className="flex items-center justify-center bg-gradient-to-br from-[#131A21] to-[#112C32] min-h-screen">
    //     {/* Container Screen */}
    //     <div className="flex justify-center">
    //       {/* Container 1 */}
    //       <div className="bg-[#192233] m-5 rounded-2xl p-10" id="form">
    //         <h2 className="text-2xl font-bold mb-6 text-center text-white">
    //           Anotator <span className="text-[#00F7FF]">fashion</span> <br /> Portal Login
    //         </h2>
    //         <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
    //           {/* Username */}
    //           <div className="flex flex-col gap-2" id="username">
    //             <label htmlFor="username" className="text-white">
    //               Username
    //             </label>
    //             <input
    //               value={username}
    //               onChange={(e) => setUsername(e.target.value)}
    //               type="text"
    //               id="email-alternative"
    //               className="placeholder:text-gray-400 border text-white border-[#444460] text-sm rounded-2xl bg-[#2F304F] block w-full px-3 py-2.5 shadow"
    //               placeholder="Username"
    //               required
    //             />
    //           </div>
    //           {/* Password */}
    //           <div className="flex flex-col gap-2" id="password">
    //             <label htmlFor="password" className="text-white">
    //               Password
    //             </label>
    //             <input
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               type="password"
    //               id="email-alternative"
    //               className="placeholder:text-gray-400 border text-white border-[#444460] text-sm rounded-2xl bg-[#2F304F] block w-full px-3 py-2.5 shadow"
    //               placeholder="Password"
    //               required
    //               autoComplete="off"
    //             />
    //           </div>
    //           {/* Button Submit Login */}
    //           <button
    //             type="submit"
    //             disabled={loading}
    //             className="text-white bg-amber-400 rounded hover:bg-amber-500 focus:ring-4 focus:ring-[#444460] shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
    //           >
    //             {loading ? "Loading..." : "Login"}
    //           </button>

    //           {/* Status eror after submit (jika ada) */}
    //           {error && <p className="text-red-500 text-center">{error}</p>}
    //         </form>

    //         {/* Button back to on-boarding page */}
    //         <Link
    //           href="/fashion-sector"
    //           className="mt-4 bg-[#1D546C] hover:bg-[#1D546C]/60 p-3 rounded-2xl text-white block text-center"
    //         >
    //           Kembali ke halaman utama
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
