import Link from "next/link";

export default function ButtonBack() {
    return (
        <Link href="/dataset">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full transition-colors cursor-pointer">
                Back
            </button>
        </Link>
    );
}