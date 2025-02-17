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
    title: "Full Stack Developer · Apprenticeship · GoIT",
    location: "Remote",
    description:
      "•Built and deployed 5+ full-stack features in a dynamic React & Node.js application. •Collaborated in an Agile team to develop scalable web applications. •Optimized performance by reducing API response time by 30%. •Worked with Next.js, Firebase, and TailwindCSS to enhance UI/UX.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Jan 2025",
  },
  {
    title: "Educator · Waldorf Kindergarten",
    location: "Hamburg, Germany",
    description:
      "•Designed interactive learning experiences, improving student engagement. •Developed creative lesson plans integrating visual & digital tools. •Improved communication & teamwork skills, valuable in web development.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Nov 2024",
  },
  {
    title: "Graphic Designer · Restaurant Anka",
    location: "Coburg, Germany",
    description:
      "•Designed UI/UX assets for menus, posters & social media marketing. •Applied design principles to create visually appealing layouts. •Gained expertise in responsive design, now applied in web development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 - Jan 2020",
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
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "GraphQL",
    "Redux",
  ],
  toolsAndDesign: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Adobe Premiere",
    "Git&GitHub",
    "VS Code",
    "Postman",
  ],
} as const;
