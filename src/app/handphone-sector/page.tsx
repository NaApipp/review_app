"use client";

import { link } from "fs";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function OnBoardingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#1A3D64] text-[#F4F4F4]">
        {/* Headline */}
        <h1 className="md:text-[1.3rem] text-center font-bold mt-4">
          Selamat Datang Di{" "}
          <span className="text-[#00F7FF] font-extrabold">Handphone</span>{" "}
          Sector
        </h1>
        <h1 className="md:text-[10px] text-center mt-5 font-bold">
          <TypeAnimation
            sequence={["Silahkan Pilih Menu Login Dibawah", 1000]}
            wrapper="span"
            speed={50}
            className="text-[13px] font-bold"
            repeat={Infinity}
          />
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 md:mt-0 mt-7">
          {/* Dashboard Card */}
          <Link
            href={"/login-admin"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
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
            href={"/login-handphone"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <h1 className="mt-5 font-bold">Login Review</h1>
            <h1 className="mt-5 font-light">
              Berikan ulasan terbaik Anda dan lihat penilaian pelanggan lain
              terhadap produk kami.{" "}
            </h1>
          </Link>
          {/* Anotator Card */}
          <Link
            href={"/login-anotator-handphone"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-6 h-6 text-white dark:text-white"
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
            <h1 className="mt-5 font-bold">Anotator User 1</h1>
            <h1 className="mt-5 font-light">
              Kelola anotasi dan keterangan data guna mendukung proses evaluasi
              dan pengambilan keputusan.{" "}
            </h1>
          </Link>
          <Link
            href={"/login-anotator-handphone-v2"}
            className="bg-[#26476C] border border-[#2b507a] rounded-2xl p-5 flex flex-col gap-2 w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              className="bg-[#305073] w-min flex items-center justify-center border-[#36659b] border rounded-[40%] p-5"
              id="icon"
            >
              <svg
                className="w-6 h-6 text-white dark:text-white"
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
            <h1 className="mt-5 font-bold">Anotator User 2</h1>
            <h1 className="mt-5 font-light">
              Kelola anotasi dan keterangan data guna mendukung proses evaluasi
              dan pengambilan keputusan.{" "}
            </h1>
          </Link>
        </div>
        <Link
          href={"/on-boarding"}
          className="bg-white p-5 rounded-2xl font-bold text-[#2b507a]  transition-transform duration-300 hover:scale-105 mb-3"
        >
          Kembali ke Halaman Utama
        </Link>
      </div>
    </>
  );
}
