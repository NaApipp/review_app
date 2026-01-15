"use client"

import { useAuth } from "../AuthProvider"
import AddProductPage from "./components/addProduct"
import ListProduct from "./components/listProduct"
import Navbar from "./components/Navbar"

export default function page() {

    const { user, isLoading } = useAuth()

    return (
        <div className="grid grid-cols-2 min-h-screen">
        <Navbar />
        <div className="flex gap-3 justify-center items-center mt-11 bg-[#0C2C55]" id="liat_schedule">
            <ListProduct />
        </div>
        <div className="flex justify-center items-center mt-11 bg-[#08152F]" id="add_scehdule">
            <AddProductPage />
        </div>
      </div>
    )
}