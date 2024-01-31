import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { cn } from "@/lib/utils";

type T_HoverText = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
};

export function HoverText({
  title,
  description,
  imageSrc,
  className,
}: T_HoverText) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className={cn("h-min p-0 text-base font-bold", className)}
        >
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="m-2 w-[80%] max-w-80">
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
