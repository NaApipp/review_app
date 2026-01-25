import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("review_app");

  const reviews = await db
    .collection("anotator_review_handphone")
    .find({})
    .project({
      _id: 0,
      reviewId: 1,
      review: 1,
      label: 1,
      labeledBy: 1,
    })
    .toArray();

  return NextResponse.json(reviews);
}
