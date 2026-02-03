import ReviewTable from "./components/ReviewTable";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import clientPromise from "@/app/lib/mongodb";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  // unwrap
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 20;
  const skip = (page - 1) * limit;

  const client = await clientPromise;
  const db = client.db("review_app");

  const reviews = await db
    .collection("anotator_review_handphone_user2")
    .find({})
    .project({
      _id: 0,
      reviewId: 1,
      review: 1,
      label: 1,
      labelBy: 1,
      createdAt: 1,
    })
    .skip(skip)
    .limit(limit)
    .toArray();

  const totalData = await db
    .collection("anotator_review_handphone_user2")
    .countDocuments();

  const totalPages = Math.ceil(totalData / limit);

  return (
    <div className="p-6 bg-[#1A3D64] min-h-screen">
      <Navbar />

      <ReviewTable reviews={reviews} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        limit={limit}
      />
    </div>
  );
}
