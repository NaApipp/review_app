import Image from "next/image";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    redirect("/on-boarding")
  );
}
