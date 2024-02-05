"use client";

import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      className="flex h-[calc(100vh-(68.44px+50px+32px))] flex-col 
	items-center justify-center gap-8 p-4 sm:h-[825.47px]"
    >
      <div className="flex max-w-xs items-center">
        <h1 className="text-2xl font-bold ">500</h1>
        <span className="ml-4 border-l border-black pl-4 text-justify dark:border-white">
          Oh no! Something went wrong with the server!
        </span>
      </div>
      <Button
        variant="link"
        className="group flex items-center gap-2"
        onClick={() => reset()}
      >
        <RefreshCcw
          scale={18}
          className="duration-500 ease-in-out group-hover:rotate-180 group-focus:rotate-180"
        />
        Try again
      </Button>
    </section>
  );
}
