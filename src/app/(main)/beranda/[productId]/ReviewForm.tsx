"use client";

import { useState } from "react";
import { useAuth } from "../../AuthProvider";

export default function ReviewForm({
  productId
}: {
  productId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const { user } = useAuth();

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);
  setError("");

  const form = e.target as HTMLFormElement;

  try {
    const res = await fetch("/api/main/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,
        reviewer: user?.username,
        rating: Number(form.rating.value),
        review: form.review.value,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Terjadi kesalahan");
      return;
    }

    // sukses → reset form & refresh halaman
    form.reset();

    // delay sebentar agar user melihat tombol loading selesai
    setTimeout(() => {
      window.location.reload();
    }, 200);

  } catch {
    setError("Server tidak dapat dihubungi");
  } finally {
    setLoading(false);
  }
}


  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mb-8 pt-6 space-y-3 form-add-product"
    >
      <h3 className="text-lg text-center text-black font-semibold">
        Tambah Review
      </h3>

      <input
        name="reviewer"
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

      {/* ✅ ERROR MESSAGE ONLY */}
      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}
    </form>
  );
}
