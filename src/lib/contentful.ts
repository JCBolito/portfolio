import {
  T_Stack,
  T_Projects,
  T_ModelData,
  T_Profile,
} from "@/types/contentful-types";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "hello",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "world",
});

export async function getModelData(model: string): Promise<T_ModelData> {
  const { name, description } = await client.getContentType(model);
  const modelData = { name, description };
  return modelData;
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
