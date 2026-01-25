"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../AuthProvider";

type Review = {
  reviewId: string;
  review: string;
  label: "fake" | "non_fake" | "no_action";
  // labelBy?: string | null;
  LabelBy: string;
};

export function ReviewRow({ review }: { review: Review }) {
  const { user } = useAuth();

  // Variable For Set Label
  const [label, setLabel] = useState(review.label);

  // Variable For Set LabelBy
  const [labelBy, setLabelBy] = useState(review.LabelBy);

  // Variable For Saving
  const [saving, setSaving] = useState(false);

  const isDirty = label !== review.label;

  async function handleSave() {
    // Jika Terjadi Missing Review ID
    if (!review?.reviewId) {
      console.error("❌ reviewId MISSING!", review);
      alert("ERROR: reviewId tidak ada. Cek console.");
      return;
    }

    if (!isDirty) return;

    setSaving(true);

    // API URL
    const url = `/api/anotator-handphone/review/${review.reviewId}/label`;

    console.log("PATCH URL:", url);
    console.log("PATCH BODY:", {
      label,
      labelBy,
    });

    try {
      // Body
      const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label,
          labelBy,
        }),
      });

      // Failed Message
      if (!res.ok) {
        const err = await res.json();
        console.error("❌ SAVE FAILED:", err);
        alert("Gagal save, cek console");
      }
    } catch (err) {
      console.error("❌ FETCH ERROR:", err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <tr className="border-b">
      <td className="p-2 text-sm">{review.reviewId}</td>
      <td className="p-2 text-sm">{review.review}</td>

      {/* Dropdown Label */}
      <td className="p-2">
        <select
          value={label}
          onChange={(e) => setLabel(e.target.value as Review["label"])}
          className="border rounded px-2 py-1"
        >
          <option value="no_action">No Action</option>
          <option value="fake">Fake</option>
          <option value="non_fake">Non Fake</option>
        </select>
      </td>

      {/* Field Username */}
      <td className="p-2 text-sm text-gray-600">
        <input type="text" placeholder="Username..." value={labelBy} onChange={(e) => setLabelBy(e.target.value)} />
      </td>

      <td className="p-2">
        <button
          onClick={handleSave}
          disabled={!isDirty || saving}
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </td>
    </tr>
  );
}
