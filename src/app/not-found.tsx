'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="text-center space-y-6">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            404
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-300">
            Page Not Found
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
          Hmm, sepertinya halaman yang kamu cari tidak ada. Coba kembali ke beranda.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
