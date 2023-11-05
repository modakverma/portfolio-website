import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import roomspace from "@/public/roomspace.png";
import spotify from "@/public/spotify.png";
import wordanalyticsImg from "@/public/Real-time.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "(Web & App Developer) STACK-X Solutions",
    location: "Online",
    description:
      "I am working as a Web & App Developer. I am also Developing the company's website, utilizing Next.js and Tailwind CSS, showcasing strong web development skills and a commitment to creating polished and functional web solutions.",
    icon: React.createElement(FaReact),
    date: "present",
  },
  {
    title: "React Developer (Part-Time)",
    location: "Work from home",
    description:
      "I worked as a front-end developer for 4 months. I also upskilled to the full stack. Enhanced and edited online betting frontend site using React",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "B.Tech (CSE)",
    location: "University Institute of Technology, HPU, Shimla",
    description:
      "I am currently in my final year of a 4-year B.Tech degree.",
    icon: React.createElement(LuGraduationCap),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Real-Time Messenger",
    description:"Real-time message sharing application. Implemented user authentication and authorisation facilities using express-sessions & cookies.",
    tags: ["React", "PostgreSQL","socket.io","NodeJs","ExpressJs","Redis","Chakra-UI"],
    imageUrl: wordanalyticsImg,
    url:"https://github.com/modakverma/real-time-messenger"
  },
  {
    title: "Spotify Clone",
    description:
      "Developed a feature-rich Music Discovery web application. Enabled upload and playing functionality along with user authenticaion.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Supabase","PostgreSQL"],
    imageUrl: spotify,
    url:"https://songifymusic.vercel.app/"
  },
  {
    title: "RoomSpace",
    description:
      "I developed a MERN-Stack project to find rooms and list your space online.",
    tags: ["React","MongoDB", "Tailwind", "Express","Bcryptjs","jsonwebtoken (JWT)"],
    imageUrl: roomspace,
    url:"https://github.com/modakverma/MERN-stack-online-room-roommate-finding-application"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "DSA",
  "C++"
] as const;
