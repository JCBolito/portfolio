import HoverTechnology from "../molecules/hover-technology";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { techStack } from "@/data/tech-stack";

type T_SkillsCard = {
  className?: string;
};

export default function SkillsCard({ className }: T_SkillsCard) {
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <CardTitle className="text-xl sm:text-2xl">Technologies</CardTitle>
        <CardDescription>
          I use the following technologies to develop most of my projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2">
        {techStack.map((data, index) => (
          <HoverTechnology
            key={index}
            title={data.title}
            imageSrc={data.imageSrc}
            description={data.description}
          />
        ))}
      </CardContent>
    </Card>
  );
}
