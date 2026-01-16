"use client";

import { useState } from "react";

import { useAuth } from "../../AuthProvider";

import Link from "next/link";

export default function ReviewForm({
  productId
}: {
  productId: string;
}) {
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    await fetch("/api/main/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId,
        reviewer: form.reviewer.value,
        rating: Number(form.rating.value),
        review: form.review.value
      })
    });

    form.reset();
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 pt-6 space-y-3 form-add-product"
    >
      <h3 className="text-lg text-center text-black font-semibold">
        Tambah Review
      </h3>

      <input
        name="reviewer"
        placeholder="Nama"
        className="field-input-review"
        value={user?.username || ""}
        readOnly
      />

      <select
        name="rating"
        required
        className="field-input-review"
      >
        <option value="">Rating</option>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <textarea
        name="review"
        placeholder="Tulis review"
        required
        className="field-input-review"
      />

      <button
        disabled={loading}
        className="btn-submit-review"
      >
        {loading ? "Mengirim..." : "Kirim Review"}
      </button>
    </form>
  );
}
