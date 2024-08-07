import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { Card, Typography } from "@material-tailwind/react";
import { ProjectsData } from "../data/Projects";
import { FaGithub } from "react-icons/fa";
import theme from "@material-tailwind/react/theme";

interface Language {
  id: string;
  color: string;
  icon: React.ComponentType<{ className: string }>;
}

const renderLanguageIcons = (languages: Language[]) => {
  return languages.map((language) => (
    <span key={language.id} className={`text-2xl ${language.color} mr-2`}>
      {React.createElement(language.icon, { className: "inline-block" })}
    </span>
  ));
};

export default function Projects() {
  document.title = "Projects | Arya Gunawan";
  return (
    <section className={`min-h-screen mx-auto px-5 ${theme}`}>
      <div className="py-7 px-5 sm:px-0">
        <div className="relative top-16">
          <h1 className="text-4xl font-bold mb-10">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectsData.map((project) => (
              <Card
                key={project.id}
                placeholder="card"
                className="mb-8 p-6 rounded-md shadow-md text-black relative border dark:text-white dark:bg-black"
              >
                <Typography
                  placeholder="title"
                  variant="h2"
                  className="text-2xl font-semibold mb-2"
                >
                  {project.title}
                </Typography>
                <Typography placeholder="description" className="mb-4">
                  {project.description}
                </Typography>
                <div className="flex-grow" />
                {project.languages.length > 0 && (
                  <div className="flex items-center mt-4">
                    <div className="mr-2">
                      {renderLanguageIcons(
                        project.languages.map((language) => ({
                          ...language,
                          id: String(language.id),
                        }))
                      )}
                    </div>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                    {project.livePreview && (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-9"
                      >
                        <LuExternalLink className="text-xl" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
