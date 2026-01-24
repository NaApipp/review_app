// lib/auth.ts
import { SignJWT, jwtVerify } from "jose";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET belum di-set di .env.local");
  return new TextEncoder().encode(secret);
}

export type TokenPayload = {
  username: string;
  role: string;
};

export async function signToken(payload: TokenPayload) {
  // Token boleh kamu pendekin/naikin. Idle logout tetap dikontrol client.
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret());
  return payload;
}
