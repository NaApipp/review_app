import ReviewTable from "./components/ReviewTable";
import clientPromise from "@/app/lib/mongodb";
import Navbar from "./components/Navbar";

export default async function Page() {

  const client = await clientPromise;

  // DB NAME
  const db = client.db("review_app");

  const reviews = await db
  // Table Name
    .collection("anotator_review_laptop")
    .find({})
    .project({
      _id: 0,
      reviewId: 1,
      review: 1,
      label: 1,
      labelBy: 1,
      createdAt: 1,
    })
    .toArray();
  return (
    <div className="p-6 bg-[#1A3D64] min-h-screen">
      <Navbar />
      
      
      {/* IMport Table */}
      <ReviewTable reviews={reviews} />
    </div>
  );
}
