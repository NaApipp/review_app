"use client";
// Auth Provider
import { useAuth } from "../AuthProvider";

// Components
import AddProductPage from "./components/addProduct";
import AddLaptopPage from "./components/addLaptop";
import Navbar from "./components/Navbar";

export default function page() {
  // Vaiable AUTH
  const { user, isLoading } = useAuth();

  return (
    <>
    {/* Navbar */}
      <div className="bg-[#0C2B4E] min-h-screen flex flex-row justify-center items-center gap-4">
        
        {/* Import Navbar */}
        <Navbar />

        <div className="flex md:flex-row flex-col items-center">
          {/* Form For add Laptop */}
        <div className="mt-20 bg-[#0C2B4E] flex flex-col justify-center items-center md:w-1/2">
          <h1 className="mb-5 text-2xl font-bold text-center">Add Display Laptop</h1>
          <AddLaptopPage />
        </div>

        {/* Line */}
        <div className="h-3/4 border-l-2 border-gray-400"></div>
        
        {/* Form For add Handphone */}
        <div className="mt-20 bg-[#0C2B4E] flex flex-col justify-center items-center md:w-1/2">
          <h1 className="mb-5 text-2xl font-bold text-center">Add Display Handphone</h1>
          <AddProductPage />
        </div>
        </div>
      </div>
    </>
  );
}
