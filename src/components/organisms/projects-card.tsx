import ProjectsCarousel from "../molecules/projects-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type T_ProjectsCard = {
  className?: string;
};

export default function ProjectsCard({ className }: T_ProjectsCard) {
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <CardTitle className="text-xl sm:text-2xl">Projects</CardTitle>
        <CardDescription>
          Some of the projects I developed throughout the years.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ProjectsCarousel />
      </CardContent>
    </Card>
  );
}
