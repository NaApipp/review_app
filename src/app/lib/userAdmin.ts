// lib/users.ts
export type AdminUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "admin" | "user";
};

export const USERS: AdminUser[] = [
  { username: "apip", password: "aku anak indo", role: "user" },
];
