import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type T_Navbar = {
  className?: string;
};

export default function Navbar({ className }: T_Navbar) {
  return (
    <div className={cn(className)}>
      <Link href="/" className="duration-500 ease-in-out hover:scale-110">
        <Image
          src="/logo.png"
          alt="Home"
          width={48}
          height={37}
          className="w-12"
        />
      </Link>
      <ModeToggle />
    </div>
  );
}
