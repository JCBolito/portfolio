import { T_Stack, T_Projects, T_ModelData } from "@/types/contentful-types";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "hello",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "world",
});

export async function getTechStack(): Promise<[T_ModelData, T_Stack]> {
  const { name, description } = await client.getContentType("stack");
  const { items } = await client.getEntries({
    content_type: "stack",
    order: ["sys.createdAt"],
  });
  const modelData = { name: name, description: description };
  const techStack = items.map((item) => ({
    technology: item.fields.technology,
    logo: item.fields.logo,
    description: item.fields.description,
  }));
  return [modelData, techStack as T_Stack];
}

export async function getProjects(): Promise<[T_ModelData, T_Projects]> {
  const { name, description } = await client.getContentType("projects");
  const { items } = await client.getEntries({
    content_type: "projects",
    order: ["-fields.dateCompleted"],
  });
  const modelData = { name: name, description: description };
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

  return [modelData, projects as T_Projects];
}
