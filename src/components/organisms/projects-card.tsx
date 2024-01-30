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
        <CardTitle className="text-xl sm:text-2xl">Technologies</CardTitle>
        <CardDescription>
          I use the following technologies to develop most of my projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2"></CardContent>
    </Card>
  );
}
