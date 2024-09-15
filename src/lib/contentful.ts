import { createClient } from "contentful";

type T_ModelData = {
  name: string;
  description: string;
};

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "hello",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "world",
});

export async function getModelData(model: string): Promise<T_ModelData> {
  const { name, description } = await client.getContentType(model);
  const modelData = { name, description };
  return modelData;
}
