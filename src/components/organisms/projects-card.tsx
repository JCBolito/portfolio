import ColoredSeparator from "../atoms/colored-separator";
import ProjectsCarousel from "../molecules/projects-carousel";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { getProjects } from "@/lib/contentful";

type T_ProjectsCard = {
  className?: string;
};

export default async function ProjectsCard({ className }: T_ProjectsCard) {
  const [modelData, projects] = await getProjects();
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center pb-0 text-center">
        <h2 className="text-xl font-bold sm:text-2xl">{modelData.name}</h2>
        <CardDescription>{modelData.description}</CardDescription>
      </CardHeader>
      <ColoredSeparator className="my-6 lg:my-3" />
      <CardContent className="px-2">
        <ProjectsCarousel projects={projects} />
      </CardContent>
    </Card>
  );
}
