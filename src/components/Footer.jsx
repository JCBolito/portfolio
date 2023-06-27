import { navigations } from "@/data/navigations";
import { contacts } from "@/data/contacts";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="grid gap-4 bg-gradient-to-b from-[#273043] to-black p-4 text-white">
      <ul className="flex justify-center gap-1 text-sm">
        {navigations.map((link, index) => {
          return (
            <li
              className="rounded border-2 border-transparent p-1 
			transition-all hover:border-[#DD0426] hover:text-[#DD0426]"
              key={index}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <ul className="flex gap-4">
          {contacts.map((contact, index) => {
            return (
              <Link href={contact.url} key={index} passHref>
                <Image
                  src={contact.image}
                  alt={contact.name}
                  width={contact.width}
                  height={contact.height}
                  className="w-8 invert"
                />
              </Link>
            );
          })}
        </ul>
      </div>
      <small className="grid text-center text-sm">
        Copyright © {year}
        <span>Joshua Caleb Bolito</span>
      </small>
    </footer>
  );
}
