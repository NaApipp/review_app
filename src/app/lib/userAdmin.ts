// lib/users.ts
export type AdminUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "admin";
};

export const USERS: AdminUser[] = [
  { username: "langitmerah", password: "kopiSenja27" , role: "admin" },
  { username: "bayu_nusantara", password: "anginTimur88", role: "admin" },
  { username: "aksara_jawa", password: "hurufKuno19", role: "admin" },
  { username: "senja_timur", password: "matahariTerbit", role: "admin" },
  { username: "pandan_wangi", password: "daunHijau45", role: "admin" },
  { username: "cakrawala_id", password: "langitBiru90", role: "admin" },
  { username: "rembulan_selatan", password: "bulanPurnama7", role: "admin" },
  { username: "tunasbangsa", password: "merdeka1945", role: "admin" },
  { username: "sawah_hijau", password: "padiMenguning3", role: "admin" },
  { username: "ombak_laut", password: "samudraBesar62", role: "admin" },
  { username: "bhinneka", password: "ragamSatu99", role: "admin" },
];

