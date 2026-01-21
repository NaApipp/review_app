"use client";

import { link } from "fs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function OnBoardingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#1A3D64] text-[#F4F4F4]">
        {/* Headline */}
        <h1 className="md:text-[1.3rem] text-center font-bold">
          <TypeAnimation
            sequence={[
              "Selamat Datang Di Mini Project Review App",
              1000,
              "Silahkan Pilih Menu Login Dibawah",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[1.3rem] font-bold"
            repeat={Infinity}
          />
        </h1>
        <div className="flex gap-4 md:mt-0 mt-7">
          <Link
            href={"/handphone-sector"}
            className="bg-[#1D546C] p-4 rounded-lg text-[#F4F4F4]"
          >
            Handphone Sector
          </Link>
          <Link
            href={"/laptop-sector"}
            className="bg-[#1D546C] p-4 rounded-lg text-[#F4F4F4]"
          >
            Laptop Sector
          </Link>
        </div>
      </div>
    </>
  );
}
