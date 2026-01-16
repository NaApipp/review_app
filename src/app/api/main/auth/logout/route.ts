// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // Stateless (JWT). Logout cukup di client: hapus token dari sessionStorage.
  return NextResponse.json({ ok: true });
}
