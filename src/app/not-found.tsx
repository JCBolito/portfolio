import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="flex h-[calc(100vh-(68.44px+50px+32px))] flex-col 
	  items-center justify-center gap-8 p-4 sm:h-[825.47px]"
    >
      <div className="flex max-w-xs items-center">
        <h1 className="text-2xl font-bold ">404</h1>
        <span className="ml-4 border-l border-black pl-4 text-justify dark:border-white">
          The resource you are looking for could not be found.
        </span>
      </div>
      <Link href={"/"}>
        <Button variant="link" className="flex items-center gap-2">
          <MoveLeft scale={18} />
          Go back
        </Button>
      </Link>
    </section>
  );
}
