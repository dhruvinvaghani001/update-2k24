import React from "react";
import Link from "next/link";
import {
  CalendarClockIcon,
  CalendarIcon,
  GalleryVerticalEndIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/events", icon: CalendarClockIcon, label: "Events" },
    { href: "/gallery", icon: GalleryVerticalEndIcon, label: "Gallery" },
  ],
};

export function Navbar() {
  return (
    <header className="fixed bottom-0 z-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="bg-background/80 border-2 border-primary"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          <DockIcon key={"login"}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/signin"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <UserIcon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Login</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </header>
  );
}
