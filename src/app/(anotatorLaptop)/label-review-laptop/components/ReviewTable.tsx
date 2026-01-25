"use client";

import { ReviewRow } from "./ReviewRow";

export default function ReviewTable({ reviews }: { reviews: any[] }) {
  return (
    <div className="bg-[#1A3D64]">
      <table className="w-full border text-center">
      <thead className="border">
        <tr className="border">
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
