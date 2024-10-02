"use client";

import { workExperience } from "@/data";
import { ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const tagVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#3B82F6", // text-blue-500
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="py-16 px-4 max-w-4xl mx-auto rounded-3xl"
      id="experience"
    >
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workExperience.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-500">
                  {exp.position}
                </h3>
                <motion.a
                  href={exp.companyUrl}
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {exp.company} <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </div>
              <span className="text-sm text-blue-400 mt-2 sm:mt-0">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-justify">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-900 text-blue-300 hover:bg-blue-700 hover:text-white cursor-pointer text-sm rounded-full"
                  variants={tagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-12 flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="lg"
          className="text-white hover:bg-blue-800 hover:text-blue-300 transition-colors duration-300"
          asChild
        >
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex "
          >
            View My Resume
            <ExternalLink size={20} className="ml-2" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
