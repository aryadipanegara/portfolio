import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import HeroImage from "../assets/HeroImage.png";
import useTheme from "../Theme/useTheme";
import MotionPage from "../components/MontionPage";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Arya Gunawan";
  }, []);

  const [iconVisible, setIconVisible] = useState([false, false, false, false]);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIconVisible((prevVisible) => {
        const next = [...prevVisible];
        const firstHiddenIndex = next.findIndex((isVisible) => !isVisible);
        if (firstHiddenIndex !== -1) {
          next[firstHiddenIndex] = true;
        } else {
          next.fill(false);
        }
        return next;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MotionPage type="left">
      <section
        className={`min-h-screen flex items-center justify-center ${
          theme === "dark" ? "bg-black text-white" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={HeroImage}
                alt="My Profile"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold mb-4">
                <span className="typing-animation">Hi, I'm Arya</span>
              </h1>
              <p className="text-xl mb-6">
                A Junior Front-End Developer with a passion for creating
                <span className="text-blue-500"> interactive</span> and
                <span className="text-blue-500"> user-friendly</span> websites.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {[FaHtml5, FaCss3, FaJsSquare, FaReact].map((Icon, index) => (
                  <div key={index}>
                    <Icon
                      className={`text-5xl ${
                        iconVisible[index] ? "opacity-100" : "opacity-0"
                      } ${getIconColor(index)}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionPage>
  );
};

const getIconColor = (index: number): string => {
  const colors = [
    "text-orange-500",
    "text-blue-500",
    "text-yellow-500",
    "text-blue-300",
  ];
  return colors[index];
};

export default Home;
