import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "We are working on something awesome. Stay tuned!",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="text-center flex items-center flex-col px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Coming Soon
        </h1>

        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          We’re building something meaningful and exciting. This page will be
          available soon.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <span className="px-4 py-2 border border-white/30 rounded-full text-sm">
            🚀 Launching Soon
          </span>
          <span className="px-4 py-2 border border-white/30 rounded-full text-sm">
            🔧 Under Development
          </span>
        </div>
        {/* Footer button direct*/}
        <Link
          href={"/on-boarding"}
          className="flex flex-row mt-7 w-max rounded-2xl items-center p-2 text-sm text-white/70 bg-blue-500 hover:bg-blue-600 transition-colors"
        >
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

          <p className="  text-white cursor-pointer font-semibold py-2 px-4 rounded-md ">
            Kembali
          </p>
        </Link>
        <footer className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Mini Review App Project
        </footer>
      </div>
    </main>
  );
}
