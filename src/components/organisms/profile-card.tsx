import { HoverText } from "../molecules/hover-text";
import { IconTooltip } from "../molecules/icon-tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
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
import { Linkedin, Github, Mail } from "lucide-react";
import { FileText } from "lucide-react";
import Link from "next/link";

type T_ProfileCard = {
  className?: string;
};

export default function ProfileCard({ className }: T_ProfileCard) {
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <Avatar className="aspect-square h-full max-h-60 w-full max-w-60">
          <AvatarImage src="/profile-image.jpg" />
          <AvatarFallback>
            <Skeleton className="h-full w-full" />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl sm:text-2xl">
          Joshua Caleb Bolito
        </CardTitle>
        <CardDescription className="italic">Frontend Developer</CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <h1 className="mb-2 text-xl font-bold">Hello, world!</h1>
        <p className="text-justify">
          I'm{" "}
          <HoverText
            title={"Joshua"}
            description={`An excellent Frontend Developer with a good track record of 
			working with a team. Hire him pls.`}
            imageSrc={"/profile-image.jpg"}
          />
          ! A Frontend Developer with expertise in utilizing{" "}
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
      <CardFooter className="grid">
        <Separator className="m-auto my-4 w-40" />
        <section className="flex justify-center gap-2">
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
          <IconTooltip
            text="Send Email"
            icon={<Mail color="#FFFFFF" />}
            href="mailto: bolitojoshuacaleb.professional@gmail.com"
            className="bg-red-600 hover:bg-red-500"
          />
        </section>
        <Separator className="m-auto my-4 w-40" />
        <Link href={"/Resume.pdf"} target="_blank" className="m-auto">
          <Button variant="outline">
            <FileText size={18} className="mr-2" />
            View Résumé
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
