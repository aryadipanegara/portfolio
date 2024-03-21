import React, { useEffect, useState } from "react";
import { IoIosMenu, IoIosMoon, IoIosSunny, IoMdClose } from "react-icons/io";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import useTheme from "../../Theme/useTheme";

type Mode = "light" | "dark";

function NavList() {
  const { theme, setDarkMode, setLightMode } = useTheme();
  const [mode, setMode] = useState<Mode>(theme);

  const toggleColorScheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  useEffect(() => {
    mode === "light" ? setLightMode() : setDarkMode();
  }, [mode, setDarkMode, setLightMode]);

  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 dark:bg-black{${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors "
        >
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/About"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/Skills"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Skills
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/Projects"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Projects
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/Certification"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Certification
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="/Contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
      <div className=" stroke-none focus:outline-none">
        <button onClick={toggleColorScheme}>
          {mode === "light" ? (
            <IoIosSunny className="text-yellow-300 w-5 h-5" />
          ) : (
            <IoIosMoon className="text-blue-600 w-5 h-5" />
          )}
        </button>
      </div>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 dark:bg-black">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block justify-center w-full ">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoMdClose className="h-6 w-6 dark:text-white" strokeWidth={2} />
          ) : (
            <IoIosMenu className="h-6 w-6 dark:text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
