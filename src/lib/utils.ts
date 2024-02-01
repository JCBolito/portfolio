import { T_Stack } from "@/types/contentful-types";
import { type ClassValue, clsx } from "clsx";
import { createClient } from "contentful";
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
  const tech = items.map((item) => {
    return {
      technology: item.fields.technology,
      logo: item.fields.logo,
      description: item.fields.description,
    };
  });
  return tech as T_Stack;
}
