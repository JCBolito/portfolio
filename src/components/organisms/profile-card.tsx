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
import { getProfile } from "@/lib/contentful";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type T_ProfileCard = {
  className?: string;
};

export default async function ProfileCard({ className }: T_ProfileCard) {
  const profile = await getProfile();
  return (
    <Card className={className}>
      <CardHeader className="grid justify-center text-center">
        <Avatar className="aspect-square h-full max-h-60 w-full max-w-60">
          <AvatarImage
            src={profile.image.fields.file.url}
            alt="Profile Picture"
            width={160}
            height={160}
            loading="eager"
          />
          <AvatarFallback>
            <Skeleton className="h-60 w-60" />
          </AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold sm:text-2xl">{profile.name}</h1>
        <CardDescription className="italic">{profile.role}</CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <h1 className="mb-2 text-xl font-bold">{profile.introduction}</h1>
        <Markdown remarkPlugins={[remarkGfm]} className="text-justify">
          {profile.information}
        </Markdown>
      </CardContent>
      <CardFooter className="grid">
        <Separator className="m-auto my-4 w-40" />
        <section className="flex justify-center gap-2">
          <IconTooltip
            text="LinkedIn"
            icon={<Linkedin color="#FFFFFF" />}
            href={profile.linkedin}
            className="bg-blue-700 hover:bg-blue-600"
          />
          <IconTooltip
            text="Github"
            icon={<Github />}
            href={profile.github}
            className="bg-gray-900 dark:bg-white"
          />
          <IconTooltip
            text="Send Email"
            icon={<Mail color="#FFFFFF" />}
            href={`mailto: ${profile.email}`}
            className="bg-red-600 hover:bg-red-500"
          />
        </section>
        <Separator className="m-auto my-4 w-40" />
        <Link
          href={`https:${profile.resume.fields.file.url}`}
          target="_blank"
          className="m-auto"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FileText size={18} className="mr-2" />
            View Résumé
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
