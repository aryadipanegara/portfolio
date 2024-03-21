import React from "react";

import Footer from "./Footer";

import useTheme from "../../Theme/useTheme";
import { Nav } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={` max-h-full ${theme === "dark" ? "bg-black text-white" : ""}`}
    >
      <Nav />
      <section
        className={`max-w-4xl m-auto px-5 ${
          theme === "dark" ? "bg-black text-white" : ""
        }`}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};
