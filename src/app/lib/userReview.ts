// lib/users.ts
export type userReview = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "user";
};

export const USERS: userReview[] = [
  { username: "bayu_nusantara", password: "anginTimur88", role: "user" },
  { username: "aksara_jawa", password: "hurufKuno19", role: "user" },
  { username: "senja_timur", password: "matahariTerbit", role: "user" },
  
  // SUPER ADMIN
  { username: "gajahkayang", password: "gajahsulap" , role: "user" },
];

