"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigations } from "@/data/navigations";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const [activeSection, setActiveSection] = useState("");
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navigations.map((route, index) => {
          return (
            <li key={index}>
              <Link
                scroll={false}
                href={route.path}
                className={`rounded p-2 font-bold transition-all duration-500
				${
          pathname == route.path
            ? "bg-[#DD0426] font-extrabold text-white"
            : "hover:text-[#DD0426]"
        }`}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
