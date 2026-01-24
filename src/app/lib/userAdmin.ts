// lib/users.ts
export type AdminUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "admin";
};

export const USERS: AdminUser[] = [
  { username: "langitmerah", password: "kopiSenja27" , role: "admin" },

  // SUPER ADMIN
  { username: "gajahkayang", password: "gajahsulap" , role: "admin" },
];

