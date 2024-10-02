"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconHome2, IconTerminal2 } from "@tabler/icons-react";

export function FloatingBar() {
  const links = [
    {
      title: "About",
      icon: (
        <IconHome2 className="h-full w-full text-blue-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Experience",
      icon: (
        <IconTerminal2 className="h-full w-full text-blue-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandGithub className="h-full w-full text-blue-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
