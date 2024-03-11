import { useEffect, useState } from "react";
import HeroImage from "../assets/HeroImage.png";
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  document.title = "Home | Arya Gunawan";
  const [iconVisible, setIconVisible] = useState([false, false, false, false]);

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

  const heroImageAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const titleAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const descriptionAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const iconAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-4xl m-auto px-5">
      <div className="bg-white min-h-screen text-black flex items-center justify-center py-7 px-5 sm:px-0">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="flex justify-center md:justify-start"
              variants={heroImageAnimation}
              initial="initial"
              animate="animate"
            >
              <img
                src={HeroImage}
                alt="My Profile"
                className="rounded-full w-48 h-48 mx-auto md:w-64 md:h-64 object-cover shadow-lg"
              />
            </motion.div>
            <div className="text-center md:text-left relative">
              <motion.h1
                className="text-5xl font-extrabold mb-4 text-black"
                variants={titleAnimation}
                initial="initial"
                animate="animate"
              >
                <span className="typing-animation">Hi, I'm Arya</span>
              </motion.h1>
              <motion.p
                className="text-xl mb-6"
                variants={descriptionAnimation}
                initial="initial"
                animate="animate"
              >
                A Junior Front-End Developer with a passion for creating
                <span className="text-blue-500"> interactive</span> and
                <span className="text-blue-500"> user-friendly</span> websites.
              </motion.p>
              <div className="flex justify-center md:justify-start space-x-4">
                {[FaHtml5, FaCss3, FaJsSquare, FaReact].map((Icon, index) => (
                  <motion.div
                    key={index}
                    variants={iconAnimation}
                    initial="initial"
                    animate={iconVisible[index] ? "animate" : "initial"}
                  >
                    <Icon className={`text-5xl ${getIconColor(index)}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getIconColor = (index) => {
  const colors = [
    "text-orange-500",
    "text-blue-500",
    "text-yellow-500",
    "text-blue-300",
  ];
  return colors[index];
};

export default Home;
