import React, { useEffect, useState } from "react";
import { IoIosMenu, IoIosMoon, IoIosSunny, IoMdClose } from "react-icons/io";
import { Navbar, Collapse } from "@material-tailwind/react";
import useTheme from "../../Theme/useTheme";
import { Link } from "react-router-dom";

type Mode = "light" | "dark";

function NavList({
  theme,
  closeNav,
}: {
  theme: Mode;
  toggleColorScheme: () => void;
}) {
  const handleItemClick = () => {
    closeNav();
  };
  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:bg-black ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <li className="p-1 font-semibold">
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors "
          onClick={handleItemClick}
        >
          Home
        </Link>
      </li>
      <li className="p-1 font-semibold">
        <Link
          to="/about"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={handleItemClick}
        >
          About
        </Link>
      </li>
      <li className="p-1 font-semibold">
        <Link
          to="/skills"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={handleItemClick}
        >
          Skills
        </Link>
      </li>
      <li className="p-1 font-semibold">
        <Link
          to="/projects"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={handleItemClick}
        >
          Projects
        </Link>
      </li>
      <li className="p-1 font-semibold">
        <Link
          to="/certification"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={handleItemClick}
        >
          Certification
        </Link>
      </li>
      <li className="p-1 font-semibold">
        <Link
          to="/contact"
          className="flex items-center hover:text-blue-500 transition-colors"
          onClick={handleItemClick}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const { theme, setDarkMode, setLightMode } = useTheme();
  const [mode, setMode] = useState<Mode>(theme as Mode);

  const toggleColorScheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  useEffect(() => {
    mode === "light" ? setLightMode() : setDarkMode();
  }, [mode, setDarkMode, setLightMode]);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-xl px-6 py-3 dark:bg-black"
      placeholder="navbar"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block justify-center w-full ">
          <NavList
            theme={theme as Mode}
            toggleColorScheme={toggleColorScheme}
          />
        </div>
        <button
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoMdClose className="h-6 w-6 dark:text-white" strokeWidth={2} />
          ) : (
            <IoIosMenu className="h-6 w-6 dark:text-white" strokeWidth={2} />
          )}
        </button>
        <button onClick={toggleColorScheme}>
          {theme === "light" ? (
            <IoIosSunny className="text-yellow-300 w-5 h-5 " />
          ) : (
            <IoIosMoon className="text-blue-600 w-5 h-5" />
          )}
        </button>
      </div>
      <Collapse open={openNav}>
        <NavList
          theme={theme as Mode}
          toggleColorScheme={toggleColorScheme}
          closeNav={() => setOpenNav(false)}
        />
      </Collapse>
    </Navbar>
  );
}
