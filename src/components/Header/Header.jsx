"use client";
import Image from "next/image";
import Link from "next/link";
import { themes } from "@/data/themes";
import { Navigation, NavigationMenu } from "./Navigation";
export default function Header({ darkTheme, changeTheme }) {
  return (
    <header className="relative z-50">
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
          <button onClick={changeTheme}>
            <Image
              src={darkTheme ? themes.dark.img : themes.light.img}
              width={200}
              height={200}
              alt=""
              className={`w-8 transition-all duration-500 hover:scale-110 ${
                darkTheme ? themes.dark.imgStyles : themes.light.imgStyles
              }`}
            />
          </button>
          <NavigationMenu darkTheme={darkTheme} />
        </div>
      </div>
    </header>
  );
}
