import { HoverText } from "../molecules/hover-text";
import { IconTooltip } from "../molecules/icon-tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Linkedin, Github } from "lucide-react";

type T_ProfileCard = {
  className?: string;
};

export default function ProfileCard({ className }: T_ProfileCard) {
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <Avatar className="aspect-square h-full max-h-60 w-full max-w-60">
          <AvatarImage src="/profile-image.jpgg" />
          <AvatarFallback>
            <Skeleton className="h-full w-full" />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl sm:text-2xl">
          Joshua Caleb Bolito
        </CardTitle>
        <CardDescription className="italic">Frontend Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-justify">
          Frontend Developer with expertise in utilizing{" "}
          <HoverText
            title={"React"}
            description={`A free and open-source front-end JavaScript library maintained by Meta 
			for building user interfaces based on components.`}
            imageSrc={"https://svgl.vercel.app/library/react.svg"}
          />{" "}
          and{" "}
          <HoverText
            title={"Next.js"}
            description={`Open-source framework created by Vercel that facilitates the development 
			of React-based web apps with server-side rendering and static site generation.`}
            imageSrc={"https://svgl.vercel.app/library/nextjs.svg"}
          />{" "}
          driven by a fervor for crafting visually captivating and user-friendly
          websites and web applications.
        </p>
      </CardContent>
      <Separator className="m-auto mb-4 w-40" />
      <CardFooter className="flex justify-center gap-2">
        <IconTooltip
          text="LinkedIn"
          icon={<Linkedin color="#FFFFFF" />}
          href="https://bit.ly/jcblinkedin"
          className="bg-blue-700 hover:bg-blue-600"
        />
        <IconTooltip
          text="Github"
          icon={<Github />}
          href="https://bit.ly/jcbgithub"
          className="bg-gray-900 dark:bg-white"
        />
      </CardFooter>
    </Card>
  );
}
