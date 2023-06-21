import Image from "next/image";
import Link from "next/link";
import ColorPalette from "@/components/ColorPalette";
import { contacts } from "@/data/contacts";
export default function Home() {
  return (
    <section
      id="home"
      className="grid h-screen max-h-[calc(100vh-120px)] max-w-screen-md  
	  content-center items-center justify-items-center gap-8
	  sm:grid-cols-[1fr_2fr]"
    >
      <div
        className="flex aspect-square h-full max-h-72
		min-h-min justify-center overflow-clip rounded-full 
		bg-gradient-to-b from-[#F02D3A] to-black"
      >
        <Image
          src={"/branding/portrait.png"}
          width={1160}
          height={1355}
          alt=""
          className="relative aspect-auto h-full min-h-min
            w-full max-w-min object-contain"
          //   className="object-contain"
        />
      </div>
      <article className="grid max-w-sm gap-6 sm:row-start-auto sm:self-center">
        <div className="grid gap-3">
          <h1 className="text-base font-bold">Hello, World!</h1>
          <h2 className="text-3xl font-extrabold">I&apos;m Joshua Caleb!</h2>
          <p className="text-lg">
            Frontend Developer with a passion for creating visually stunning and
            user-friendly websites and web-applications.
          </p>
        </div>
        <ColorPalette />
        <div className="grid gap-3">
          <Link
            href={"/resume/jcb-resume.pdf"}
            target="_blank"
            className="flex w-fit items-center gap-2 rounded bg-[#F02D3A] p-2 
		  font-extrabold text-white transition-all hover:bg-[#DD0426]"
          >
            <Image
              src={"/resume/document-icon.png"}
              alt=""
              width={410}
              height={512}
              className="w-4 invert"
            />
            Download Résumé
          </Link>
          <ul
            id="home-contact"
            className="flex gap-4 [&_img]:w-8 [&_img]:contrast-50"
          >
            {contacts.map((contact, index) => {
              return (
                <li key={index}>
                  <Link href={contact.url} target="_blank">
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      width={contact.width}
                      height={contact.height}
                      className="transition-all hover:contrast-100"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
