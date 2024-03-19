import React from "react";
import useTheme from "../../Theme/useTheme";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full text-center py-3 fixed bottom-0 text-sm ${
        theme === "dark" ? "dark bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p>&copy; 2024 AryaGunawan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
