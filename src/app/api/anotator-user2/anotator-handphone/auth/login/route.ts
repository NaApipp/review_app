// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { USERS } from "@/app/lib/userAnotatorV2";
import { signToken } from "@/app/lib/AuthAnotator";

// hanya huruf, angka, underscore, titik (boleh kamu sesuaikan)
const USERNAME_REGEX = /^[a-zA-Z0-9._]+$/;

export async function POST(req: Request) {
  // 1️⃣ Validasi body JSON
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Body request tidak valid (JSON diperlukan)" },
      { status: 400 }
    );
  }

  const username = body?.username?.toString().trim() ?? "";
  const password = body?.password?.toString().trim() ?? "";

  // 2️⃣ Validasi field kosong
  if (!username || !password) {
    return NextResponse.json(
      { error: "Username dan password wajib diisi" },
      { status: 400 }
    );
  }

  // 3️⃣ Validasi karakter username
  if (!USERNAME_REGEX.test(username)) {
    return NextResponse.json(
      {
        error:
          "Username tidak valid. Gunakan hanya huruf, angka, titik (.) atau underscore (_)",
      },
      { status: 400 }
    );
  }

  // 4️⃣ Cek username ada atau tidak
  const userByUsername = USERS.find((u) => u.username === username);

  if (!userByUsername) {
    return NextResponse.json(
      { error: "Username tidak ditemukan" },
      { status: 404 }
    );
  }

  // 5️⃣ Cek password
  if (userByUsername.password !== password) {
    return NextResponse.json(
      { error: "Password salah" },
      { status: 401 }
    );
  }

  // 6️⃣ Generate token
  const token = await signToken({
    username: userByUsername.username,
    role: userByUsername.role,
  });

  // 7️⃣ Success
  return NextResponse.json(
    {
      message: "Login berhasil",
      token,
      user: {
        username: userByUsername.username,
        role: userByUsername.role,
      },
    },
    { status: 200 }
  );
}
