import React from "react";
import { FaGithub, FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import { SiCodeigniter, SiExpo, SiFlutter, SiMysql } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import { Card, Typography } from "@material-tailwind/react";

const renderLanguageIcons = (languages) => {
  return languages.map((language) => (
    <span key={language.id} className={`text-2xl ${language.color} mr-2`}>
      {React.createElement(language.icon, { className: "inline-block" })}
    </span>
  ));
};

const projectsData = [
  {
    id: 1,
    title: "Masjidinfo",
    description: "website about the history of mosques located in the world",
    languages: [
      { id: 1, icon: FaReact, color: "text-blue-500" },
      { id: 2, icon: BiLogoTailwindCss, color: "text-cyan-400" },
      { id: 3, icon: FaJsSquare, color: "text-yellow-500" },
      { id: 4, icon: BiLogoRedux, color: "text-purple-500" },
      { id: 4, icon: SiMysql, color: "text-blue-500" },
    ],
    githubLink: "https://github.com/AryaGunawann/masjid-info.git",
    livePreview: "https://masjidinfo.vercel.app",
  },
  {
    id: 2,
    title: "News",
    description:
      "This is a news website that displays news from Indonesia to abroad.",
    languages: [
      { id: 1, icon: FaReact, color: "text-blue-500" },
      { id: 2, icon: BiLogoTailwindCss, color: "text-cyan-400" },
      { id: 3, icon: FaJsSquare, color: "text-yellow-500" },
      { id: 4, icon: BiLogoRedux, color: "text-purple-500" },
    ],
    githubLink: "https://github.com/AryaGunawann/FP-HKTV8-News_API.git",
  },
  {
    id: 2,
    title: "Shupee",
    description:
      "front end e-commerce application website that displays very attractive products",
    languages: [
      { id: 1, icon: FaReact, color: "text-blue-500" },
      { id: 2, icon: BiLogoTailwindCss, color: "text-cyan-400" },
      { id: 3, icon: FaJsSquare, color: "text-yellow-500" },
      { id: 4, icon: BiLogoRedux, color: "text-purple-500" },
    ],
    githubLink: "https://github.com/AryaGunawann/FP-HKTV8-Shupee.git",
    livePreview: "https://fp-hktv-8-shupee.vercel.app",
  },
  {
    id: 3,
    title: "TravelNest",
    description:
      "This hotel reservation application was created specifically for mobile phones to rent temporary accommodation. ",
    languages: [
      { id: 1, icon: FaReact, color: "text-blue-500" },
      { id: 2, icon: FaJsSquare, color: "text-yellow-500" },
      { id: 3, icon: BiLogoRedux, color: "text-purple-500" },
      { id: 4, icon: SiExpo, color: "text-black" },
    ],
    githubLink: "https://github.com/AryaGunawann/FP-HKTV8-TravelNest.git",
  },
  {
    id: 4,
    title: "CarRent",
    description: "car rental application website with interesting features. ",
    languages: [
      { id: 1, icon: SiCodeigniter, color: "text-orange-500" },
      { id: 2, icon: FaHtml5, color: "text-orange-500" },
      { id: 3, icon: FaCss3, color: "text-blue-500" },
      { id: 4, icon: SiMysql, color: "text-blue-500" },
    ],

    githubLink: "https://github.com/AryaGunawann/Car-rent.git",
  },
  {
    id: 5,
    title: "Daftar Statius Kereta Api",
    description:
      "simple mobile application with flutter displays train stations in Indonesia ",
    languages: [{ id: 1, icon: SiFlutter, color: "text-blue-500" }],

    githubLink: "https://github.com/AryaGunawann/Car-rent.git",
  },
];

const Projects = () => (
  <section className="max-w-4xl mx-auto px-5">
    <div className="py-7 px-5 sm:px-0">
      <div className="relative top-16">
        <h1 className="text-4xl font-bold mb-10 text-black">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="mb-8 p-6 rounded-md shadow-md bg-white relative"
            >
              <Typography
                tag="h2"
                className="text-2xl font-semibold mb-2 text-black"
              >
                {project.title}
              </Typography>
              <Typography className="text-black mb-4">
                {project.description}
              </Typography>
              <div className="flex-grow" />
              {project.languages.length > 0 && (
                <div className="flex items-center mt-4">
                  <div className="mr-2">
                    {renderLanguageIcons(project.languages)}
                  </div>
                </div>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black absolute top-2 right-2"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black absolute top-2 right-9"
              >
                <LuExternalLink className="text-xl" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
