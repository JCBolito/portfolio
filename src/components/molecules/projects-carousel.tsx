"use client";

import ProjectDropdown from "../atoms/project-dropdown";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { formatDate } from "@/lib/utils";
import { T_Projects } from "@/types/contentful-types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Suspense, useRef } from "react";

type T_ProjectsCarousel = {
  projects: T_Projects;
};

export default function ProjectsCarousel({ projects }: T_ProjectsCarousel) {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{ loop: false, align: "end" }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="grid sm:basis-1/2">
            <Card className="flex flex-col overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`https:${project.image.fields.file.url}`}
                  alt={project.title}
                  width={2504}
                  height={1318}
                  loading="eager"
                  className="min-h-full w-auto duration-1000 ease-in-out hover:scale-150 active:scale-150"
                />
              </div>
              <CardContent className="grid gap-2 p-2">
                <CardTitle>
                  <section className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <ProjectDropdown
                      website={project.urlWebsite}
                      repository={project.urlRepository}
                    />
                  </section>
                  <span className="text-sm opacity-70">
                    {formatDate(project.startDate)} –{" "}
                    {formatDate(project.dateCompleted)}
                  </span>
                </CardTitle>
                <section className="flex flex-wrap gap-1">
                  {project.technologies.map((technology, index) => (
                    <Badge key={index}>{technology}</Badge>
                  ))}
                </section>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
