// lib/users.ts
export type AnotatorUser = {
  username: string;
  password: string; // demo only (plaintext). Jangan gini di production.
  role: "anotator";
};

export const USERS: AnotatorUser[] = [
  { username: "pandan_wangi", password: "daunHijau45" , role: "anotator" },
  { username: "cakrawala_id", password: "langitBiru90" , role: "anotator" },

  // SUPER ADMIN
  { username: "gajahkayang", password: "gajahsulap" , role: "anotator" },

];

