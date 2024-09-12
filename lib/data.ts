import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Use relative URLs for images stored in the public folder
const MoneyGuardImg = "/MoneyGuard.png";
const phonebookImg = "/phonebook.png";
const filmImg = "/film.png";
const IceCreamImg = "/IceCream.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Money Guard",
    description:
      "A financial management app that helps users track their income and expenses. Built independently using React and local storage, it allows users to categorize transactions and manage their budget effectively.",
    tags: ["React", "Redux", "Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: MoneyGuardImg, // URL string to the image in the public folder
  },
  {
    title: "Phonebook",
    description:
      "A contact management app created independently with React and Redux, using local storage for data persistence. The app includes features like contact creation, search, and user authentication.",
    tags: ["React", "Redux", "Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: phonebookImg, // URL string to the image in the public folder
  },
  {
    title: "Filmoteka",
    description:
      "A movie library app developed by a team using JavaScript, HTML, and CSS. As the team lead and a developer, I not only coordinated task distribution and oversaw project architecture but also actively coded alongside my teammates. The project involved integrating an external movie database API and building core front-end features",
    tags: ["Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: filmImg, // URL string to the image in the public folder
  },
  ,
  {
    title: "IceCream",
    description:
      "A collaborative team project where I served as team lead, coordinating the development of a responsive website using HTML, CSS, and JavaScript. I was responsible for dividing tasks, ensuring smooth team communication, and contributing to the site's interactive features and responsive design.",
    tags: ["JavaScript", "HTML&CSS"],
    imageUrl: IceCreamImg, // URL string to the image in the public folder
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
] as const;
