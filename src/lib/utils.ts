import { T_Stack, T_Projects } from "@/types/contentful-types";
import { type ClassValue, clsx } from "clsx";
import { EntrySkeletonType, createClient } from "contentful";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "hello",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "world",
});

export async function getTechStack() {
  const { items } = await client.getEntries({
    content_type: "stack",
    order: ["sys.createdAt"],
  });
  const tech = items.map((item) => ({
    technology: item.fields.technology,
    logo: item.fields.logo,
    description: item.fields.description,
  }));
  return tech as T_Stack;
}

export async function getProjects() {
  const { items } = await client.getEntries({
    content_type: "projects",
    order: ["-fields.dateCompleted"],
  });
  const projects = items.map((project) => ({
    title: project.fields.title,
    startDate: project.fields.startDate,
    dateCompleted: project.fields.dateCompleted,
    technologies: project.fields.technologies,
    description: project.fields.description,
    urlWebsite: project.fields.urlWebsite,
    urlRepository: project.fields.urlRepository,
    image: project.fields.image,
  }));
  return projects as T_Projects;
}
