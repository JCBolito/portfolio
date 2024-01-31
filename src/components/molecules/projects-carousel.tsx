"use client";

import ProjectDropdown from "../atoms/project-dropdown";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export default function ProjectsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false }),
  );
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <Card className="overflow-hidden">
              <Image
                src={project.imageDirectory + project.image}
                alt={project.title}
                width={2504}
                height={1318}
              />
              <CardContent className="grid gap-2 p-2">
                <CardTitle className="">
                  <section className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <ProjectDropdown
                      website={project.url}
                      repository={project.repository}
                    />
                  </section>
                  <span className="text-sm opacity-70">{project.date}</span>
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
