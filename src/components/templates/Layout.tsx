import React from "react";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import useTheme from "../../Theme/useTheme";

export const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex max-h-full ${
        theme === "dark" ? "bg-black text-white" : ""
      }`}
    >
      <Sidebar />
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
