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
  { username: "pandan_wangi", password: "daunHijau45", role: "user" },
  { username: "cakrawala_id", password: "langitBiru90", role: "user" },
  { username: "rembulan_selatan", password: "bulanPurnama7", role: "user" },
  { username: "tunasbangsa", password: "merdeka1945", role: "user" },
  { username: "sawah_hijau", password: "padiMenguning3", role: "user" },
  { username: "ombak_laut", password: "samudraBesar62", role: "user" },
  { username: "bhinneka", password: "ragamSatu99", role: "user" },
];

