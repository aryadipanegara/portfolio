"use client";

import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { IconBrandTiktok } from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";
import { Sosials } from "@/data";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 my-4 mt-4">
      {Sosials.map((link) => (
        <motion.div
          key={link.name}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <LinkPreview
            url={link.url}
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            aria-label={`Visit my ${link.name} profile`}
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </LinkPreview>
        </motion.div>
      ))}
    </div>
  );
}
