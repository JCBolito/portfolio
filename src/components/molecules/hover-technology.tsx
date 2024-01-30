import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Skeleton } from "../ui/skeleton";
import { T_TechStack } from "@/data/tech-stack";

export default function HoverTechnology({
  title,
  imageSrc,
  description,
}: T_TechStack) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="flex items-center gap-1 bg-gray-200 font-bold 
		text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white
		dark:hover:bg-gray-600"
        >
          <Avatar className="aspect-square h-6 w-6 rounded-none">
            <AvatarImage src={imageSrc} />
            <AvatarFallback className="aspect-square h-6 w-6 rounded-none">
              <Skeleton className="h-full w-full" />
            </AvatarFallback>
          </Avatar>
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="m-2 w-[80%] max-w-80 sm:w-full">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
