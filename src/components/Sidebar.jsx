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

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handlePageChange = (pageName) => {
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

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 1024 ? true : window.innerWidth > 768);
    };

    const handlePageChange = () => {
      const currentPage = window.location.pathname.substring(1);
      setActivePage(currentPage || "home");
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("popstate", handlePageChange);

    handleResize();
    handlePageChange();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handlePageChange);
    };
  }, []);

  return (
    <div className="md:flex">
      <Card
        className={`fixed left-0 top-0 h-screen w-[20rem] p-4 bg-white shadow-md z-50 ${
          isSidebarOpen ? "" : "hidden md:block"
        }`}
      >
        <div className="mb-2 p-4 m-5 justify-center flex items-center">
          <Typography variant="h5" color="blue-gray">
            Hii, Every One 🤚
          </Typography>
        </div>
        <List className="space-y-2">
          {pages.map((page) => (
            <Link
              to={`/${page.name}`}
              key={page.name}
              className={`flex items-center ${
                activePage === page.name ? "bg-gray-200" : ""
              }`}
              onClick={() => handlePageChange(page.name)}
            >
              <ListItem
                className={`flex items-center ${
                  activePage === page.name ? "bg-gray-200" : ""
                }`}
              >
                <ListItemPrefix>
                  {React.createElement(page.icon, {
                    className: `${
                      activePage === page.name ? "text-black" : "text-gray-500"
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
      {window.innerWidth > 768 && (
        <div className="md:hidden fixed left-0 top-0 p-4 z-">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
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

export default Sidebar;
