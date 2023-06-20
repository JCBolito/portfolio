"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { navigations } from "@/data/navigations";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {navigations.map((route, index) => {
          return (
            <li key={index}>
              <Link
                scroll={false}
                href={route.path}
                className="rounded border-2 border-transparent p-2 font-bold transition-all
          		duration-500 hover:border-[#DD0426] hover:text-[#DD0426]"
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

function NavigationMenu({ darkTheme }) {
  const pathname = usePathname();
  return (
    <div
      className={`relative block md:hidden ${
        darkTheme ? "text-black [&_img]:invert" : ""
      }`}
    >
      <button className="peer grid items-center transition-all focus:rotate-[45deg] peer-hover:rotate-[45deg]">
        <Image
          src={"/menu.svg"}
          width={200}
          height={200}
          alt=""
          className={`w-8 contrast-75 `}
        />
      </button>
      <nav
        className="absolute right-0 top-[3.75rem] hidden rounded bg-white 
		p-2 active:grid peer-focus:grid"
      >
        <ul className="grid gap-1">
          {navigations.map((route, index) => {
            return (
              <li key={index} className="flex w-28">
                <Link
                  href={route.path}
                  className="w-full rounded border-2 border-transparent p-2 font-bold transition-all 
				  duration-500 hover:border-[#DD0426] hover:text-[#DD0426]"
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export { Navigation, NavigationMenu };
