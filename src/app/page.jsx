import Image from "next/image";
import ColorPalette from "@/components/ColorPalette";
export default function HomePage() {
  return (
    <section
      id="home"
      className="items relative top-4 grid h-screen max-h-[calc(100vh-110px)] 
	  grid-rows-[1fr_auto] gap-4 overflow-hidden sm:grid-cols-[auto_1fr] sm:grid-rows-1"
    >
      <Image
        src={"/branding/portrait.png"}
        width={848}
        height={1207}
        alt=""
        className="row-start-2 aspect-auto h-auto max-h-full min-h-min w-auto
          self-end justify-self-center sm:row-start-auto"
      />
      <div
        className="row-start-1 grid gap-4 self-center
		sm:row-start-auto sm:self-center"
      >
        <h1 className="font-bold">Hello, World!</h1>
        <h2 className="text-4xl font-extrabold">I&apos;m Joshua Caleb!</h2>
        <p className="text-xl">
          Frontend Developer with a passion for creating visually stunning and
          user-friendly websites and web-applications.
        </p>
        <ColorPalette />
      </div>
    </section>
  );
}
