"use client";

import { link } from "fs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function OnBoardingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#1A3E64] text-[#F4F4F4]">
        {/* Headline */}
        <h1 className="md:text-[1.3rem] text-center font-bold">Selamat Datang Di <span className="text-[#00F7FF] font-extrabold">Laptop</span> Sector</h1>
        <h1 className="md:text-[10px] text-center mt-5 font-bold">
          <TypeAnimation
            sequence={[
              "Silahkan Pilih Menu Login Dibawah",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[13px] font-bold"
            repeat={Infinity}
          />
        </h1>
        <div className="flex gap-7 md:mt-0 mt-7">
          {/* Reviwe Card */}
          <Link
            href={"/login-admin"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-10 h-10 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
                />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Login Dashboard</h1>
            <h1 className="mt-5 font-light">
              Manajemen produk untuk pengalaman pelanggan yang lebih baik.{""}
            </h1>
          </Link>
          {/* Reviwe Card */}
          <Link
            href={"/login-laptop"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-10 h-10 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Login Review</h1>
            <h1 className="mt-5 font-light">
              Berikan ulasan terbaik Anda dan lihat penilaian pelanggan lain terhadap produk kami.{" "}
            </h1>
          </Link>
          <Link
            href={"/label-review-handphone"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Anotator</h1>
            <h1 className="mt-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              distinctio nulla explicabo sint repudiandae! Velit est explicabo
              delectus et, corrupti vero debitis id quaerat, laudantium nesciunt
              eum enim minima eius!i.{" "}
            </h1>
          </Link>
        </div>
        <Link href={"/on-boarding"} className="bg-white p-5 rounded-2xl font-bold text-[#2b507a] transition-transform duration-300 hover:scale-105">Kembali ke Halaman Utama</Link>
      </div>
    </>
  );
}
