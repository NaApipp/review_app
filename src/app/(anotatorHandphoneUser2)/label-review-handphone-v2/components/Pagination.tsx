"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  limit: number;
};

export default function Pagination({
  currentPage,
  totalPages,
  limit,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    params.set("limit", String(limit));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="rounded px-3 py-1 bg-white/20 cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="rounded px-3 py-1 bg-white/20 cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
