import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

const VALID_LABELS = ["fake", "non_fake", "no_action"];

/* =======================
   Format date to "DD/MM/YYYY HH:MM:SS"  For Message Date
======================= */
function formatDateWIB(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  return `${map.day}/${map.month}/${map.year} ${map.hour}:${map.minute}:${map.second}`;
}



export async function PATCH(
  req: Request,
  context: { params: Promise<{ reviewId: string }> }
) {
  // 🔑 WAJIB await params (Next.js 15+)
  const { reviewId } = await context.params;

  console.log("✅ reviewId dari route:", reviewId);

  const { label, labelBy } = await req.json();

  if (!reviewId) {
    return NextResponse.json(
      { message: "reviewId missing" },
      { status: 400 }
    );
  }

  if (!VALID_LABELS.includes(label)) {
    return NextResponse.json(
      { message: "Invalid label" },
      { status: 400 }
    );
  }

      const formattedDate = formatDateWIB(new Date());


  const client = await clientPromise;
  const db = client.db("review_app");

  const result = await db
    .collection("anotator_review_laptop")
    .updateOne(
      { reviewId },
      {
        $set: {
          label,
          labelBy: labelBy ?? "",
          labeledAt: formattedDate,
        },
      }
    );

  if (result.matchedCount === 0) {
    return NextResponse.json(
      { message: "Review not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
