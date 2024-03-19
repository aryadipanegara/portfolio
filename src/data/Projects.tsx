import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import { SiCodeigniter, SiExpo, SiFlutter, SiMysql } from "react-icons/si";

export const ProjectsData = [
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
