import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type T_HoverText = {
  title: string;
  description: string;
  imageSrc: string;
};

export function HoverText({ title, description, imageSrc }: T_HoverText) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 text-base font-bold">
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
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
