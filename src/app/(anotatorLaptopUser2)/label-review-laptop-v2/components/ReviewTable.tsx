"use client";

import { ReviewRow } from "./ReviewRow";

export default function ReviewTable({ reviews }: { reviews: any[] }) {
  return (
    <div className="bg-[#1A3D64]">
      <table className="w-full border-collapse rounded-xl shadow-sm overflow-hidden  text-center">
      <thead className="bg-slate-100 ">
        <tr className="text-slate-700 text-sm uppercase tracking-wide">
          <th className="pt-5 pb-5">Review Id</th>
          <th className="pt-5 pb-5">Review</th>
          <th className="pt-5 pb-5">Label</th>
          <th className="pt-5 pb-5">Labeled By</th>
          <th className="pt-5 pb-5">Action</th>
        </tr>
      </thead>

      <tbody>
        {reviews.map((review) => (
          <ReviewRow
            key={review.reviewId}
            review={review}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
}
