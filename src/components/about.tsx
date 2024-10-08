"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const headerText = "Arya Dipanegara";
const subHeaderText = "Frontend Developer";
const taglineText =
  "Delivering digital solutions that are not only visually captivating but also intuitive and user-friendly.";

const paragraphs = [
  "Hello! I’m Dipa, and my programming journey began when I saw my older sister studying a related field in college. Her belief in my potential inspired me to pursue this path. In 2021, I decided to further my education at university to become a skilled programmer, where I met friends who share the same ambition.",
  "I started with Python, but I soon discovered my passion for designing beautiful and meaningful user interfaces. As a frontend developer, I focus on creating engaging web experiences. A friend encouraged me to learn JavaScript, which I embraced wholeheartedly, exploring various frameworks and libraries to enhance my skills.",
  "Currently, I'm expanding my expertise into fullstack JavaScript and TypeScript, and I'm also eager to learn mobile development with React Native. I believe in continuous learning and welcome constructive feedback to improve my work and deliver impactful digital solutions.",
];

export function About() {
  return (
    <div className="py-16 max-w-4xl mx-auto rounded-3xl" id="about">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <header className="text-center text-white">
          <TextGenerateEffect
            words={headerText}
            className="text-4xl font-bold mb-2"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl text-gray-200 dark:text-gray-400 mb-4"
          >
            {subHeaderText}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-gray-400 dark:text-gray-200 italic"
          >
            {taglineText}
          </motion.p>
        </header>

        <div className="space-y-6 text-white dark:text-gray-300 text-justify">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
              className="leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
