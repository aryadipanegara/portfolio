"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sosials } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-300 py-16 "
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text text-white">
              Arya Dipanegara
            </h3>
            <p className="text-sm leading-relaxed">
              Passionate about crafting digital experiences that inspire and
              innovate. Let's collaborate to bring your vision to life through
              elegant code and intuitive design.
            </p>
          </motion.div>
          <motion.div variants={childVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                {["About", "Projects", "Exprience"].map((item) => (
                  <motion.li
                    key={item}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Link
                      href={item === "About" ? "#" : `#${item.toLowerCase()}`}
                      className="text-sm hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
          <motion.div variants={childVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {Sosials.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={childVariants}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>© {currentYear} Arya Dipanegara. All rights reserved.</p>
          <p className="mt-2">
            Crafting digital solutions with passion and precision.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
