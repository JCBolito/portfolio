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

export async function getProfile(): Promise<T_Profile> {
  const item = await client.getEntry("5f46lOqzpOpz0EMdQm1Mx4");
  const profile = {
    image: item.fields.image,
    name: item.fields.name,
    role: item.fields.role,
    introduction: item.fields.introduction,
    information: item.fields.information,
    linkedin: item.fields.linkedin,
    github: item.fields.github,
    email: item.fields.email,
    resume: item.fields.resume,
  };
  return profile as T_Profile;
}
export async function getTechStack(): Promise<[T_ModelData, T_Stack]> {
  const { name, description } = await client.getContentType("stacks");
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
