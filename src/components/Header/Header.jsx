"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { navigations } from "@/data/navigations";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white p-2">
      <div className="m-auto flex max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <Image
            src={"/branding/logo.png"}
            width={706}
            height={501}
            alt=""
            className="w-full max-w-[4rem]"
          />
        </Link>
        <Navigation />
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={"/theme/sun.svg"}
              width={200}
              height={200}
              alt=""
              className="w-8 contrast-75"
            />
          </button>
          <div className="relative block md:hidden">
            <button className="peer transition-all focus:rotate-[45deg] peer-hover:rotate-[45deg]">
              <Image
                src={"/menu.svg"}
                width={200}
                height={200}
                alt=""
                className="w-8 contrast-75"
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
                        className={`w-full rounded p-2 font-bold 
						transition-all hover:text-white
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
          </div>
        </div>
      </div>
    </header>
  );
}
