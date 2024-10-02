"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { WorkProjects } from "@/data";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const projectCardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hover: {
      color: "#3B82F6", // text-blue-500
      transition: {
        duration: 0.2,
      },
    },
  };

  const tagVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#2563EB", // bg-blue-600
      color: "#FFFFFF", // text-white
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16  max-w-4xl mx-auto"
      id="projects"
    >
      <motion.div
        className="space-y-8 sm:space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {WorkProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:p-6 space-y-4 sm:space-y-0 sm:space-x-4 "
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div
              className="w-full sm:w-1/3 flex-shrink-0 overflow-hidden rounded-sm"
              variants={projectCardVariants}
            >
              <motion.div variants={imageVariants}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center">
                <motion.h3
                  className="text-lg sm:text-xl font-semibold text-blue-500"
                  variants={titleVariants}
                >
                  <a
                    href={project.projectUrl}
                    className="hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </motion.h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded-full cursor-pointer"
                    variants={tagVariants}
                    whileHover="hover"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
