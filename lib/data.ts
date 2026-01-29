import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Use relative URLs for images stored in the public folder
const SlimMomImg = {
  src: "/MoneyGuard.png",
  width: 715,
  height: 429,
};
const MoneyGuardImg = {
  src: "/MoneyGuard.png",
  width: 715,
  height: 429,
};
const phonebookImg = {
  src: "/phonebook.png",
  width: 715,
  height: 429,
};
const filmImg = {
  src: "/film.png",
  width: 715,
  height: 429,
};
const IceCreamImg = {
  src: "/IceCream.png",
  width: 715,
  height: 377,
};

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },

  {
    name: "Design",
    hash: "/#design",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Recommendations",
    hash: "/#recommendations",
  },

  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pedagogical Support Staff · DRK Daycare Center Zum Krückaupark",
    location: "Elmshorn, Germany",
    description:
      "•Supporting qualified educators in daily group activities •Accompanying children during play, learning, and daily routines •Participating in creative, artistic, and hands-on activities •Collaborating with the team and communicating with parents",
    icon: React.createElement(CgWorkAlt),
    date: "Mai 2025- Present",
  },
  {
    title: "Full Stack Developer · Apprenticeship · GoIT",
    location: "Remote",
    description:
      "•Built and deployed 5+ full-stack features in a dynamic React & Node.js application. •Collaborated in an Agile team to develop scalable web applications. •Optimized performance by reducing API response time by 30%. •Worked with Next.js, Firebase, and TailwindCSS to enhance UI/UX.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Jan 2025",
  },
  {
    title: "Substitute Educator · Waldorf Kindergarten",
    location: "Hamburg, Germany",
    description:
      "•Adapted quickly to different classroom environments, ensuring continuity in learning. •Supported children's development through creative and interactive activities. •Fostered problem-solving and communication skills in a diverse environment. •Collaborated with educators to maintain a structured and engaging learning atmosphere.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Nov 2024",
  },
] as const;

export const projectsData = [
  {
    title: "SlimMom",
    description:
      "A financial management app that helps users track their income and expenses. Built independently using React and local storage, it allows users to categorize transactions and manage their budget effectively.",
    tags: ["React", "Redux", "Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: {
      src: "/slim-mom.png",
      width: 500,
      height: 300,
    },
    demo: "https://madalinagomei.github.io/SlimMom/",
    code: "https://github.com/madalinagomei/SlimMom",
  },
  {
    title: "MoneyGuard",
    description:
      "A financial management app that helps users track their income and expenses. Built independently using React and local storage, it allows users to categorize transactions and manage their budget effectively.",
    tags: ["React", "Redux", "Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: {
      src: "/project-money-guard.png",
      width: 500,
      height: 300,
    },
    demo: "https://madalinagomei.github.io/project-money-guard/login",
    code: "https://github.com/madalinagomei/project-money-guard",
  },

  {
    title: "Phonebook",
    description:
      "A contact management app created independently with React and Redux, using local storage for data persistence. The app includes features like contact creation, search, and user authentication.",
    tags: ["React", "Redux", "Node.js", "JavaScript", "HTML&CSS"],
    imageUrl: {
      src: "/phonebook.PNG",
      width: 500,
      height: 300,
    },
    demo: "https://madalinagomei.github.io/goit-react-hw-08-phonebook/",
    code: "https://github.com/madalinagomei/goit-react-hw-08-phonebook",
  },

  {
    title: "IceCream",
    description:
      "A collaborative team project where I served as team lead, coordinating the development of a responsive website using HTML, CSS, and JavaScript. I was responsible for dividing tasks, ensuring smooth team communication, and contributing to the site&apos;s interactive features and responsive design.",
    tags: ["JavaScript", "HTML&CSS"],
    imageUrl: {
      src: "/IceCream.PNG",
      width: 500,
      height: 300,
    },
    demo: "https://madalinagomei.github.io/team9-project/index.html",
    code: "https://github.com/madalinagomei/team9-project",
  },
  {
    title: "Film",
    description:
      "A movie library app developed by a team using JavaScript, HTML, and CSS. As the team lead and a developer, I not only coordinated task distribution and oversaw project architecture but also actively coded alongside my teammates. The project involved integrating an external movie database API and building core front-end features",
    tags: ["Node.js", "JavaScript", "HTML&CSS"],

    imageUrl: {
      src: "/film.PNG",
      width: 500,
      height: 300,
    },
    demo: "https://madalinagomei.github.io/team3-JavaScriptProject/",
    code: "https://github.com/madalinagomei/team3-JavaScriptProject",
  },
] as const;

export const skillsData = {
  techStack: [
    "Drawing & Illustration",
    "Visual Arts & Design",
    "Creative Workshops for Children",
    "Art-based Learning",
    "Child-centered activities",
  ],
  toolsAndDesign: [
    "Graphic Design (Adobe, Canva etc.)",
    "Branding & Visual Identity",
    "Book Illustration",
    "Product Design",
  ],
  technicalSkills: ["HTML, CSS, JavaScript", "React, Next.js", "UI/UX Design"],
} as const;
