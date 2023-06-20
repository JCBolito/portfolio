import Image from "next/image";
import Link from "next/link";
import ColorPalette from "@/components/ColorPalette";
import { contacts } from "@/data/contacts";
export default function HomePage() {
  return (
    <article
      id="home"
      className="top-4 grid h-screen max-h-[calc(100vh-142px)] 
	  grid-rows-[1fr_auto] gap-4 sm:grid-cols-[auto_1fr] sm:grid-rows-1"
    >
      <Image
        src={"/branding/portrait.png"}
        width={848}
        height={1207}
        alt=""
        className="relative row-start-2 mb-[-2.05rem] aspect-auto h-auto max-h-full min-h-min
		w-auto self-end justify-self-center sm:row-start-auto"
      />
      <section
        className="row-start-1 grid gap-4 self-center
		sm:row-start-auto sm:self-center"
      >
        <div className="grid gap-4">
          <h1 className="text-lg font-bold">Hello, World!</h1>
          <h2 className="text-4xl font-extrabold">I&apos;m Joshua Caleb!</h2>
          <p className="text-xl">
            Frontend Developer with a passion for creating visually stunning and
            user-friendly websites and web-applications.
          </p>
        </div>
        <ColorPalette />
        <div className="grid gap-4">
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
      </section>
    </article>
  );
}
