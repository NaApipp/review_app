"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authStorageKeys } from "../../AuthProvider";

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
      const res = await fetch("/api/dashboard/auth/login", {
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
      sessionStorage.setItem(authStorageKeys.TOKEN_KEY, data.token);
      sessionStorage.setItem(
        authStorageKeys.LAST_ACTIVITY_KEY,
        String(Date.now())
      );

      router.replace("/add-product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#08152F] min-h-screen">
        {/* Container Screen */}
        <div className="flex justify-center">
          {/* Container 1 */}
          <div className="bg-[#102D41] m-5 rounded-2xl p-10" id="form">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Login Dashboard Admin
            </h2>
            <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
              <div className="flex flex-col gap-2" id="username">
                <label htmlFor="username" className="text-white">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="email-alternative"
                  className="border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="flex flex-col gap-2" id="password">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="email-alternative"
                  className="border border-amber-300 text-sm rounded-2xl block w-full px-3 py-2.5 shadow"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="text-white bg-amber-400 rounded hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
