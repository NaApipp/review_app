"use client";
// Auth Provider
import { useAuth } from "../AuthProvider";

// Components
import AddProductPage from "./components/addProduct";
import AddLaptopPage from "./components/addLaptop";
import Navbar from "./components/Navbar";

export default function page() {
  const { user, isLoading } = useAuth();

  return (
    <>
    {/* Navbar */}
      <div className="bg-[#0C2B4E] min-h-screen flex flex-row justify-center items-center gap-4">
        <Navbar />

        {/* Login Form For Laptop */}
        <div className="mt-20 bg-[#0C2B4E] flex flex-col justify-center items-center w-1/2">
          <h1 className="mb-5 text-2xl font-bold">Add Display Laptop</h1>
          <AddLaptopPage />
        </div>

        {/* Line */}
        <div className="h-3/4 border-l-2 border-gray-400"></div>
        
        {/* Login Form For Handphone */}
        <div className="mt-20 bg-[#0C2B4E] flex flex-col justify-center items-center w-1/2">
          <h1 className="mb-5 text-2xl font-bold">Add Display Handphone</h1>
          <AddProductPage />
        </div>
      </div>
    </>
  );
}
