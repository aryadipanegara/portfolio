import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  FaHome,
  FaBolt,
  FaCube,
  FaAward,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

import useTheme from "../../Theme/useTheme";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

type Mode = "light" | "dark";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const { theme, setDarkMode, setLightMode } = useTheme();
  const [mode, setMode] = useState<Mode>(theme);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handlePageChange = (pageName: string) => {
    setActivePage(pageName);
    closeSidebar();
  };

  const pages = [
    { name: "home", icon: FaHome, label: "Home" },
    { name: "about", icon: FaInfoCircle, label: "About" },
    { name: "skills", icon: FaBolt, label: "Skills" },
    { name: "projects", icon: FaCube, label: "Projects" },
    { name: "awards", icon: FaAward, label: "Awards" },
    { name: "contact", icon: FaEnvelope, label: "Contact" },
  ];

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
    <div className="md:flex">
      <Card
        className={`fixed left-0 top-0 h-screen w-[20rem] p-4  bg-white shadow-md z-50 ${
          isSidebarOpen ? "" : "hidden md:block"
        } ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <div className="mb-2 p-4 m-5 justify-center flex items-center">
          <Typography variant="h5" color={theme === "dark" ? "white" : "black"}>
            Hii, Every One
          </Typography>
          <button
            className="ml-3 stroke-none focus:outline-none"
            onClick={toggleColorScheme}
          >
            {mode === "light" ? (
              <IoIosSunny className="text-yellow-300 w-6 h-6" />
            ) : (
              <IoIosMoon className="text-blue-600 w-6 h-6" />
            )}
          </button>
        </div>
        <List className="space-y-2">
          {pages.map((page) => (
            <Link
              to={`/${page.name}`}
              key={page.name}
              className={`flex items-center rounded ${
                activePage === page.name ? "bg-white" : ""
              }`}
              onClick={() => handlePageChange(page.name)}
            >
              <ListItem
                className={`flex items-center ${
                  activePage === page.name ? "bg-grey-100" : ""
                }`}
              >
                <ListItemPrefix>
                  {React.createElement(page.icon, {
                    className: `${
                      activePage === page.name
                        ? theme === "light"
                          ? "text-black"
                          : "text-white"
                        : ""
                    } h-5 w-5`,
                  })}
                </ListItemPrefix>

                <span
                  className={`ml-2 ${
                    activePage === page.name ? "font-bold" : ""
                  }`}
                >
                  {page.label}
                </span>
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>

      {/* Tombol toggle untuk desktop dan tablet */}
      {window.innerWidth <= 768 && (
        <div className="md:hidden fixed left-0 top-0 p-4 z-50">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <MdClose
                className={`h-6 w-6 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <MdMenu
                className={`h-6 w-6 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            )}
          </button>
        </div>
      )}

      {/* Overlay untuk menutup sidebar di luar area sidebar */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}
