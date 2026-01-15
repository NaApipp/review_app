// lib/users.ts
export type AdminUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
};

export const USERS: AdminUser[] = [
  { username: "langitmerah", password: "kopiSenja27" },
  { username: "bayu_nusantara", password: "anginTimur88" },
  { username: "aksara_jawa", password: "hurufKuno19" },
  { username: "senja_timur", password: "matahariTerbit" },
  { username: "pandan_wangi", password: "daunHijau45" },
  { username: "cakrawala_id", password: "langitBiru90" },
  { username: "rembulan_selatan", password: "bulanPurnama7" },
  { username: "tunasbangsa", password: "merdeka1945" },
  { username: "sawah_hijau", password: "padiMenguning3" },
  { username: "ombak_laut", password: "samudraBesar62" },
  { username: "bhinneka", password: "ragamSatu99" },
];

