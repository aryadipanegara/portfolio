import { IconBrandTiktok } from "@tabler/icons-react";
import {
  Github,
  Instagram,
  Linkedin,
  MailboxIcon,
  MailCheck,
} from "lucide-react";
export const workExperience = [
  {
    startDate: "May",
    endDate: "July 2024",
    position: "Frontend Developer",
    company: "PT. Tritek Indonesia",
    companyUrl: "https://maps.app.goo.gl/hDk4WKLKiBFMRWc68",
    description:
      "I completed my internship (Practical work Courses) at PT. Tritek Indonesia from May to July 2024 as part of my university coursework. During this time, I developed a Production Monitoring project specifically for the company to streamline product management. The project was built using Next.js, TypeScript, Mantine UI, Express.js, and MySQL. To ensure data security, the project was run locally and not connected to any external networks.",
    technologies: ["TypeScript", "React", "MySQL", "ExpressJS"],
  },
  {
    startDate: "Aug",
    endDate: "Dec 2023",
    position: "React and React Native For Frontend Developer",
    company: "Hacktiv8",
    companyUrl: "https://www.hacktiv8.com/",
    description:
      "I participated in the Kampus Merdeka Batch 5 program at Hacktiv8 from August 18, 2023 to December 30, 2023, focusing on React and React Native for frontend development. Throughout the program, I gained in-depth knowledge and hands-on experience in building modern, responsive web and mobile applications using technologies like JavaScript, React, React Native, and Redux. During this period, I fully committed to learning and completed various projects, including a news portal and a simple e-commerce platform, as part of the final assignments.",
    technologies: ["JavaScript", "React", "React Native", "Redux"],
  },
];

export const WorkProjects = [
  {
    title: "Masjidinfo",
    description:
      "Masjidinfo is a platform dedicated to providing detailed information about various mosques, including their history, architecture, and community events. Built using Next.js, TypeScript, Redux, and Tailwind CSS, the website allows users to explore stories, images, and key details of mosques from different regions. The project aims to offer a user-friendly, visually appealing experience while maintaining high performance and responsiveness across devices.",
    imageUrl: "/Masjidinfo.jpg",
    projectUrl: "https://www.masjidinfo.my.id/",
    technologies: [
      "NextJs",
      "Typescript",
      "Redux",
      "TailwindCSS",
      "ExpressJS",
      "MySQL",
    ],
  },
  {
    title: "Monitoring Production",
    description:
      "I completed my internship (Kuliah Kerja Praktik) at PT. Tritek Indonesia from May to July 2024 as part of my university coursework. During this time, I developed a Production Monitoring project specifically for the company to streamline product management. The project was built using Next.js, TypeScript, Mantine UI, Express.js, and MySQL. To ensure data security, the project was run locally and not connected to any external networks.",
    imageUrl: "/monitoring.png",
    projectUrl: "https://github.com/aryadipanegara/Monitoring-Produksi.git",
    technologies: ["NextJs", "Typescript", "ExpressJS", "Mantine UI", "MySQL"],
  },
  {
    title: "News",
    description:
      "A news platform that provides up-to-date information on Indonesian news, COVID-19 updates, and government program topics. This site features customizable bookmark and search functions to enhance user experience. Unfortunately, a demo is currently unavailable due to API access restrictions.",
    imageUrl: "/news.jpg",
    projectUrl: "https://github.com/aryadipanegara/FP-HKTV8-News_API",
    technologies: ["React", "JavaScript", "TailwindCSS", "Redux"],
  },
  {
    title: "Simple E-Commerce",
    description:
      "Developing an e-commerce simulation website aimed at providing a seamless online shopping experience through engaging features and comprehensive functionality. The application includes user authentication (login and logout), product search functionality by name, and an admin panel for managing inventory and product categories.",
    imageUrl: "/simple-ecommers.jpeg",
    projectUrl: "https://fp-hktv-8-shupee.vercel.app/",
    technologies: ["React", "JavaScript", "TailwindCSS", "Redux"],
  },
];

export const Sosials = [
  {
    name: "GitHub",
    url: "https://github.com/aryadipanegara",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aryadipanegara/",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/arya_gunawannnn",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dip_5hit",
    icon: <IconBrandTiktok className="w-6 h-6" />,
  },
  {
    name: "Email",
    url: "mailto:aryadipanegarag@gmail.com",
    icon: <MailCheck className="w-6 h-6" />,
  },
];
