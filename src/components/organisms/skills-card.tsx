import ColoredSeparator from "../atoms/colored-separator";
import HoverTechnology from "../molecules/hover-technology";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { getModelData } from "@/lib/contentful";
import { getTechnologies } from "@/lib/gql-queries";

type T_SkillsCard = {
  className?: string;
};

export default async function SkillsCard({ className }: T_SkillsCard) {
  const modelData = await getModelData("stack");
  const techStack = await getTechnologies();
  console.log(techStack);
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center pb-0 text-center">
        <h2 className="text-xl font-bold sm:text-2xl">{modelData.name}</h2>
        <CardDescription>{modelData.description}</CardDescription>
      </CardHeader>
      <ColoredSeparator className="my-6 lg:my-3" />
      <CardContent className="flex flex-wrap justify-center gap-2">
        {techStack.map((data, index) => (
          <HoverTechnology
            key={index}
            title={data?.technology as string}
            imageSrc={data?.logo?.url as string}
            description={data?.description as string}
          />
        ))}
      </CardContent>
    </Card>
  );
}
