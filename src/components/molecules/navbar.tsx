import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

type T_Navbar = {
  className?: string;
};

export default function Navbar({ className }: T_Navbar) {
  return (
    <div className={cn(className)}>
      <Image src="/logo.png" alt="" width={706} height={501} className="w-12" />
      <ModeToggle />
    </div>
  );
}
