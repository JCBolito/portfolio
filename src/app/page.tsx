import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Image src="/logo.png" alt="" width={706} height={501} className="w-12" />
      <ModeToggle />
    </main>
  );
}
