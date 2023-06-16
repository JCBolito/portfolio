import Image from "next/image";
import { navigations } from "@/data/navigations";
export default function MenuButton() {
  return (
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
						transition-all duration-500
						${
              pathname == route.path
                ? "bg-[#DD0426] font-extrabold text-white"
                : "border-2 border-transparent hover:border-[#DD0426] hover:text-[#DD0426]"
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
  );
}
