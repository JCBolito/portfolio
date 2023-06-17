"use client";
import Image from "next/image";
import ColorPalette from "@/components/ColorPalette";
import { technologyGroups } from "@/data/technologies";
export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="items grid min-h-[calc(100vh-142px)] place-content-center 
	  justify-items-center gap-4 overflow-hidden"
    >
      <div className="grid max-w-lg gap-4 text-center">
        <h1 className="text-5xl font-bold">Skills</h1>
        <p className="text-lg">
          Throughout my journey in college and in self-learning, I have learned
          to use the following technologies
        </p>
        <ColorPalette className={"justify-center"} />
      </div>
      <div className="flex max-w-2xl flex-wrap justify-center gap-4">
        {Object.keys(technologyGroups).map((technologyGroup, index) => {
          return technologyGroups[technologyGroup].map((technology, index) => {
            return (
              <div
                key={index}
                className="relative grid items-center rounded bg-[rgba(39,48,67,0.15)]
					  p-4 transition-all hover:[&>*]:saturate-100"
              >
                <div
                  className="absolute inset-0 z-10 flex flex-col justify-end gap-4 rounded
                  	  bg-gradient-to-t from-black to-[#0a0a0aa2] p-2 text-white
                  	  opacity-0 transition-all hover:opacity-100"
                >
                  <p className="font-bold">{technology.name}</p>
                  <p className="text-xs">{technology.description}</p>
                </div>
                <Image
                  src={technology.src}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                  className="w-40 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.35)] filter"
                />
              </div>
            );
          });
        })}
      </div>
    </section>
  );
}
