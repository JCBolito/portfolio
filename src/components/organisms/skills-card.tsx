import HoverTechnology from "../molecules/hover-technology";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getTechStack } from "@/lib/contentful";

type T_SkillsCard = {
  className?: string;
};

export default async function SkillsCard({ className }: T_SkillsCard) {
  const [modelData, techStack] = await getTechStack();
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <CardTitle className="text-xl sm:text-2xl">{modelData.name}</CardTitle>
        <CardDescription>{modelData.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2">
        {techStack.map((data, index) => (
          <HoverTechnology
            key={index}
            title={data.technology}
            imageSrc={data.logo.fields.file.url}
            description={data.description}
          />
        ))}
      </CardContent>
    </Card>
  );
}
