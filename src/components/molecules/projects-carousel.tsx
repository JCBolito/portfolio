"use client";

import ProjectDropdown from "../atoms/project-dropdown";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
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
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="h-full w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <Card className="grid grid-cols-2 overflow-hidden">
              <Image
                src={project.imageDirectory + project.image}
                alt={project.title}
                width={2504}
                height={1318}
              />
              <CardContent className="flex flex-col justify-evenly gap-2 p-2">
                <CardTitle className="grid gap-1">
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
