import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

type T_IconTooltip = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  href: string;
};
export function IconTooltip({ icon, text, className, href }: T_IconTooltip) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} target="_blank">
            <Button
              variant="default"
              className={cn(className, "p-2")}
              aria-label={text}
            >
              {icon}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
