"use client";

import { ReviewRow } from "./ReviewRow";

export default function ReviewTable({ reviews }: { reviews: any[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>ID</th>
          <th>Review</th>
          <th>Label</th>
          <th>Labeled By</th>
          <th>Action</th>
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
  );
}
