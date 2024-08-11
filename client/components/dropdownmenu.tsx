import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ExitIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { HomeIcon, InfoIcon, Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function DropdownMenuBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <Link href="/">
          {" "}
          <DropdownMenuItem>
            <HomeIcon className="mr-2 h-4 w-4" /> Home
          </DropdownMenuItem>
        </Link>
        <Link href="/faq">
          {" "}
          <DropdownMenuItem>
            <QuestionMarkCircledIcon className="mr-2 h-4 w-4" /> FAQs
          </DropdownMenuItem>
        </Link>
        <Link href="/directory">
          {" "}
          <DropdownMenuItem>
            <GearIcon className="mr-2 h-4 w-4" /> Directory
          </DropdownMenuItem>
        </Link>
        {/* <Link href="/aboutmnnit">
          {" "}
          <DropdownMenuItem>
            <InfoIcon className="mr-2 h-4 w-4" /> Visit MNNIT
          </DropdownMenuItem>
        </Link> */}
        <Link href="https://paperfactorymnnit.pythonanywhere.com/">
          {" "}
          <DropdownMenuItem>
            <InfoIcon className="mr-2 h-4 w-4" /> Paper Factory
          </DropdownMenuItem>
        </Link>
        <Link href="/careercoach">
          {" "}
          <DropdownMenuItem>
            <InfoIcon className="mr-2 h-4 w-4" /> Career Coach
          </DropdownMenuItem>
        </Link>
        <Link href="/therapist">
          {" "}
          <DropdownMenuItem>
            <InfoIcon className="mr-2 h-4 w-4" /> AI Therapist
          </DropdownMenuItem>
        </Link>
        <Link href="/logout">
          {" "}
          <DropdownMenuItem>
            <ExitIcon className="mr-2 h-4 w-4" /> Logout
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
