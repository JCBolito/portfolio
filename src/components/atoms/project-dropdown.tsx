import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

type T_ProjectDropdown = {
  website?: string;
  repository?: string;
};
export default function ProjectDropdown({
  website,
  repository,
}: T_ProjectDropdown) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(!website && !repository && "hidden")}
        asChild
      >
        <Button variant="secondary" size="icon" className="h-auto p-0">
          <MoreHorizontal />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Go to</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {website && (
          <DropdownMenuItem asChild>
            <Link href={website} target="_blank">
              Website
            </Link>
          </DropdownMenuItem>
        )}
        {repository && (
          <DropdownMenuItem asChild>
            <Link href={repository} target="_blank">
              Repository
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
