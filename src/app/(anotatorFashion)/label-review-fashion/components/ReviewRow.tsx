"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../AuthProvider";

type Review = {
  reviewId: string;
  review: string;
  label: "fake" | "non_fake" | "no_action";
  // labelBy?: string | null;
  labelBy: string;
};

export function ReviewRow({ review }: { review: Review }) {
  const [label, setLabel] = useState(review.label);
  const [labelBy, setLabelBy] = useState(review.labelBy ?? "");
  const [saving, setSaving] = useState(false);

  const isDirty = label !== review.label || labelBy !== review.labelBy;

  async function handleSave() {
    if (!review.reviewId) return;

    setSaving(true);

    try {
      const res = await fetch(
        `/api/anotator-fashion/review/${review.reviewId}/label`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ label, labelBy }),
        },
      );

      const data = await res.json(); // ✅ SATU KALI SAJA

      if (!res.ok) {
        throw data;
      }

      alert("Data berhasil disimpan");

      setLabel(data.label);
      setLabelBy(data.labelBy);
    } catch (err) {
      console.error("SAVE FAILED:", err);
      alert("Gagal menyimpan data");
    } finally {
      setSaving(false);
    }
  }

  return (
    <tr className="border-b hover:bg-[#0C2B4E] transition-colors">
      <td className="p-2 text-sm">{review.reviewId}</td>
      <td className="p-2 text-sm">{review.review}</td>

      {/* Dropdown Label */}
      <td className="p-2">
        <select
          value={label}
          onChange={(e) => setLabel(e.target.value as Review["label"])}
          className="border rounded px-2 py-1 "
        >
          <option className="text-black bg-amber-300" value="no_action">
            No Action
          </option>
          <option className="text-black bg-red-500" value="fake">
            Palsu
          </option>
          <option className="text-black bg-green-500" value="non_fake">
            Asli
          </option>
        </select>
      </td>

      {/* Field Username */}
      <td className="p-2 text-sm text-gray-600 ">
        <input
          type="text"
          placeholder="Username..."
          className="bg-[#13202D] p-2 rounded text-white"
          value={labelBy}
          onChange={(e) => setLabelBy(e.target.value)}
        />
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
