"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, NavigationMenu } from "./Navigation";
export default function Header() {
  return (
    <header className="">
      <div className="m-auto flex items-center justify-between">
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
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}
