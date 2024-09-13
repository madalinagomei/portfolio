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
    title: "Full Stack Developer · Apprenticeship · GoIT",
    location: "Remote",
    description:
      "Engaged in hands-on projects during my practice module, contributing to the development of dynamic web applications with a focus on React, Node.js, Next, JavaScript, HTML & CSS.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Present",
  },
  {
    title: "Educator · Waldorf Kindergarten",
    location: "Hamburg, Germany",
    description:
      "Facilitated educational activities and supported students in their learning process. · Developed and implemented engaging lesson plans.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Present",
  },
  {
    title: "Graphic Designer · Schawarma Anka",
    location: "Houston, TX",
    description:
      "Creation of designs for menus, posters, advertising, etc. · Design creation and implementation in the business.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 - Jan 2020",
  },
] as const;

export const projectsData = [
  {
    title: "MoneyGuard",
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
    title: "Film",
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
  "React",
  "React.js",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
] as const;
