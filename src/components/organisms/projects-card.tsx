import ProjectsCarousel from "../molecules/projects-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getProjects } from "@/lib/utils";

type T_ProjectsCard = {
  className?: string;
};

export default async function ProjectsCard({ className }: T_ProjectsCard) {
  const projects = await getProjects();
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <CardTitle className="text-xl sm:text-2xl">Projects</CardTitle>
        <CardDescription>
          Some of the projects I developed throughout the years.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <ProjectsCarousel projects={projects} />
      </CardContent>
    </Card>
  );
}
