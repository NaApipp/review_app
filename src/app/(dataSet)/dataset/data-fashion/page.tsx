"use client";

import { useState, useEffect } from "react";

import {
  ClipboardList,
  Mail,
  Pen,
  Info,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import ButtonBack from "../components/ButtonBack";

interface Aduan {
  reviewId: string;
  review: string;
  label: string;
}

export default function ClientView() {
  const router = useRouter();
  const [aduanList, setAduanList] = useState<Aduan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchDataset = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/dataset/data-fashion");
        const json = await response.json();

        if (json.success) {
          const sortedData = [...json.data].sort(
          (a, b) => Number(a.reviewId) - Number(b.reviewId)
        );

        setAduanList(sortedData);
        } else {
          setError(json.message || "Gagal mengambil dataset fashion");
        }
      } catch (error) {
        console.error("Error fetching dataset fashion:", error);
        setError("Terjadi kesalahan koneksi");
      } finally {
        setLoading(false);
      }
    };

    fetchDataset();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(aduanList.length / itemsPerPage);
  const currentData = aduanList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-5 bg-[#1A3D64]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-indigo-500" />
            Dataset Fashion
          </h2>
        </div>
        <ButtonBack />
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 rounded-xl text-sm font-medium flex items-center gap-3">
          <Info className="w-5 h-5" />
          {error}
        </div>
      )}

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl shadow-gray-200/20 dark:shadow-none overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  Review ID
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  Review
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  Label
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4">
                      <div className="h-10 w-40 bg-gray-100 dark:bg-gray-700 rounded-xl" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-10 w-48 bg-gray-100 dark:bg-gray-700 rounded-xl" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-10 w-32 bg-gray-100 dark:bg-gray-700 rounded-xl" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-10 w-32 bg-gray-100 dark:bg-gray-700 rounded-xl" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-8 w-24 bg-gray-100 dark:bg-gray-700 rounded-full" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-10 w-28 bg-gray-100 dark:bg-gray-700 rounded-xl" />
                    </td>
                  </tr>
                ))
              ) : currentData.length > 0 ? (
                currentData.map((aduan) => (
                  <tr
                    key={aduan.reviewId}
                    className="group hover:bg-gray-50/80 dark:hover:bg-gray-700/30 transition-all duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            ID Data: {aduan.reviewId}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 py-2">
                        {aduan.review && (
                          <div className="flex items-start gap-2 text-[15px] text-gray-900 dark:text-white font-medium whitespace-normal min-w-[400px]">
                            <Mail className="w-4 h-4 mt-1 text-indigo-400 flex-shrink-0" />
                            <span className="break-words">{aduan.review}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm font-medium tracking-tight max-w-[200px]">
                        <Pen className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span
                          className={`truncate ${
                            aduan.label.toLowerCase() === "asli"
                              ? "text-green-600 dark:text-green-400"
                              : aduan.label.toLowerCase() === "palsu"
                              ? "text-red-600 dark:text-red-400"
                              : "text-gray-600 dark:text-white"
                          }`}
                          title={aduan.label}
                        >
                          {aduan.label}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-50">
                      <ClipboardList className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Belum ada data pengaduan.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {!loading && aduanList.length > itemsPerPage && (
          <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-700/50 bg-gray-50/30 dark:bg-gray-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Menampilkan{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              -{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                {Math.min(currentPage * itemsPerPage, aduanList.length)}
              </span>{" "}
              dari{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                {aduanList.length}
              </span>{" "}
              dataset
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 mx-1">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  // Show current page, first, last, and one on each side
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                          currentPage === pageNum
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                            : "text-gray-500 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    pageNum === currentPage - 2 ||
                    pageNum === currentPage + 2
                  ) {
                    return (
                      <span key={pageNum} className="px-1 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-white dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next Page"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
