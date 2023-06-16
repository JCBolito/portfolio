"use client";
import Image from "next/image";
import ColorPalette from "@/components/ColorPalette";
import { technologyGroups } from "@/data/technologies";
export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="items grid justify-center justify-items-center gap-4 overflow-hidden pt-8"
    >
      <div className="grid max-w-md gap-4 text-center">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p>
          Throughout my journey in college and in self-learning, I have learned
          to use the following technologies
        </p>
        <ColorPalette className={"justify-center"} />
      </div>
      <ul className="justify-items grid gap-4">
        {Object.keys(technologyGroups).map((technologyGroup, index) => {
          return (
            <li key={index} className="flex flex-wrap justify-center">
              <ul className="flex flex-wrap justify-center gap-4 ">
                {technologyGroups[technologyGroup].map((technology, index) => {
                  return (
                    <li
                      key={index}
                      className="relative flex flex-wrap items-center rounded bg-[#0000001a]
					  p-2 bg-blend-difference transition-all hover:[&>*]:saturate-100"
                    >
                      <div
                        className="absolute inset-0 z-10 flex items-end rounded 
					  bg-gradient-to-t from-black to-[#00000000] p-2 font-bold text-white
					  opacity-0 transition-all hover:opacity-100"
                      >
                        <p>{technology.name}</p>
                      </div>
                      <Image
                        src={technology.src}
                        alt={technology.name}
                        width={technology.width}
                        height={technology.height}
                        className="h-auto w-32 transition-all"
                      />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
