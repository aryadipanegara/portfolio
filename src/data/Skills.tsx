import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiCodeigniter,
  SiRedux,
  SiTailwindcss,
  SiXampp,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiMysql, DiNetbeans } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

export interface Skill {
  id: number;
  icon: any;
  color: string;
  title: string;
}

export interface SkillsData {
  [key: string]: Skill[];
}

export const skillsData: SkillsData = {
  languages: [
    { id: 1, icon: FaHtml5, color: "text-orange-500", title: "HTML5" },
    { id: 2, icon: FaCss3, color: "text-blue-500", title: "CSS3" },
    { id: 3, icon: FaJsSquare, color: "text-yellow-500", title: "JavaScript" },
    { id: 4, icon: FaPhp, color: "text-blue-800", title: "PHP" },
    { id: 5, icon: FaPython, color: "text-blue-800", title: "Python" },
  ],
  frameworks: [
    { id: 1, icon: FaReact, color: "text-blue-500", title: "React" },
    { id: 2, icon: SiRedux, color: "text-purple-700", title: "Redux" },
    { id: 3, icon: FaNodeJs, color: "text-green-600", title: "Node.js" },
    {
      id: 4,
      icon: SiCodeigniter,
      color: "text-orange-500",
      title: "CodeIgniter",
    },
    { id: 5, icon: FaReact, color: "text-blue-500", title: "React" },
  ],
  UI: [
    { id: 1, icon: FaBootstrap, color: "text-purple-500", title: "Bootstrap" },
    {
      id: 2,
      icon: SiTailwindcss,
      color: "text-cyan-400",
      title: "Tailwind CSS",
    },
    { id: 3, icon: FaSass, color: "text-pink-500", title: "SCSS" },
    {
      id: 4,
      icon: SiTailwindcss,
      color: "text-blue-800",
      title: "Material UI",
    },
  ],
  DBMS: [{ id: 1, icon: DiMysql, color: "text-blue-500", title: "MySQL" }],
  tools: [
    { id: 1, icon: TbBrandVscode, color: "text-blue-700", title: "VSCode" },
    { id: 2, icon: DiNetbeans, color: "text-orange-500", title: "NetBeans" },
    { id: 3, icon: SiXampp, color: "text-green-600", title: "XAMPP" },
    { id: 4, icon: FaFigma, color: "text-purple-700", title: "Figma" },
    {
      id: 5,
      icon: SiAdobephotoshop,
      color: "text-blue-800",
      title: "Photoshop",
    },
    {
      id: 6,
      icon: SiAdobeillustrator,
      color: "text-orange-500",
      title: "Illustrator",
    },
  ],
};
