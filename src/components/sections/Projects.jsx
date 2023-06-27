import Carousel from "./projects/Carousel";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "react-simple-badges";
import ColorPalette from "../ColorPalette";
export default function Projects() {
  return (
    <section
      id="projects"
      className="grid justify-center justify-items-center gap-4"
    >
      <div className="grid max-w-md gap-4 text-center">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-lg">
          Some of the projects I made throughout my journey that showcases my
          growth as a developer
        </p>
        <ColorPalette className={"justify-center"} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              technologies={project.technologies}
              imageDirectory={project.imageDirectory}
              images={project.images}
              description={project.description}
              links={project.links}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  technologies,
  imageDirectory,
  images,
  description,
  links,
}) {
  return (
    <article
      className="max-w-md overflow-hidden rounded-lg bg-[#ffffff1a] shadow-md"
      id="project"
    >
      <Carousel imageDirectory={imageDirectory} images={images} />
      <div className="m-4 flex flex-wrap justify-center justify-items-center gap-1">
        {technologies.map((technology, index) => {
          return (
            <Badge
              key={index}
              name={technology}
              backgroundColor="#000000"
              logoColor="#FFFFFF"
            />
          );
        })}
      </div>
      <div className="grid gap-4 px-4 py-2">
        <h1 className="text-center font-extrabold">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
      <div className="my-4 mb-6 flex justify-center gap-2">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.url}
              className="flex items-center gap-2 rounded-full bg-black p-2 
			  transition-all hover:scale-110"
              target="_blank"
              passHref
            >
              <Image
                src={link.img}
                alt={link.alt}
                width={256}
                height={256}
                className="w-6 invert"
              />
            </Link>
          );
        })}
      </div>
    </article>
  );
}
