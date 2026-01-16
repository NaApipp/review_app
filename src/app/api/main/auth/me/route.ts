// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/AuthReview";



function getBearerToken(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const [type, token] = auth.split(" ");
  if (type !== "Bearer" || !token) return null;
  return token;
}

export async function GET(req: Request) {
  const token = getBearerToken(req);
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const payload = await verifyToken(token);
    return NextResponse.json({
      user: { username: payload.username, role: payload.role },
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
