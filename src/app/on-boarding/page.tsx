"use client";

import { link } from "fs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import { Shirt } from "lucide-react";

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
              "Silahkan Pilih Sector Yang Ingin di Kunjungi",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[1.3rem] font-bold"
            repeat={Infinity}
          />
        </h1>
        <div className="flex gap-7 md:mt-0 mt-7">
          {/* Handphone Sector Card */}
          <Link href={"/handphone-sector"} className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex items-center flex-col w-69 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-10 h-10 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Handphone Sector</h1>
          </Link>

          {/* Laptop Sector Card */}
          <Link href={"/laptop-sector"} className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex items-center flex-col w-69 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-10 h-10 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"
                />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Laptop Sector</h1>
          </Link>
          {/* Fashion Sector Card */}
          <Link href={"/fashion-sector"} className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex items-center flex-col w-69 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <Shirt className="w-10 h-10" />
            </div>
            <h1 className="mt-5 font-bold">Fashion Sector</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
