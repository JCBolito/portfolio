import ProjectsCarousel from "@/components/molecules/projects-carousel";
import TestCarousel from "@/components/molecules/test-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TestPage() {
  return (
    <main className="p-4">
      <Card>
        <CardHeader className="grid justify-center text-center">
          <CardTitle className="text-xl sm:text-2xl">Projects</CardTitle>
          <CardDescription>
            Some of the projects I developed throughout the years.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectsCarousel />
          {/* <TestCarousel /> */}
        </CardContent>
      </Card>
    </main>
  );
}
