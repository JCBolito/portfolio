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
import { T_Projects } from "@/types/contentful-types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Suspense } from "react";

type T_ProjectsCarousel = {
  projects: T_Projects;
};

export default function ProjectsCarousel({ projects }: T_ProjectsCarousel) {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true }),
  );
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="flex sm:basis-1/2">
            <Card className="grid items-stretch overflow-hidden">
              <Suspense fallback={<Skeleton />}>
                <Image
                  src={`https:${project.image.fields.file.url}`}
                  alt={project.title}
                  width={2504}
                  height={1318}
                  loading="lazy"
                />
              </Suspense>
              <CardContent className="grid gap-2 p-2">
                <CardTitle className="">
                  <section className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <ProjectDropdown
                      website={project.urlWebsite}
                      repository={project.urlRepository}
                    />
                  </section>
                  <span className="text-sm opacity-70">
                    {`${project.startDate}`} – {`${project.dateCompleted}`}
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
