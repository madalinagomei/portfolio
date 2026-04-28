import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import type { WorkItem } from "./types";

const timelinePlanningToolImage = "/Timeline%20Planing%20Tool.PNG";

export const links = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Gallery",
    href: "/design-gallery",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pedagogical Support Staff - DRK Daycare Center Zum Kruckaupark",
    location: "Elmshorn, Germany",
    description:
      "Supporting daily routines, creative activities and team coordination while working closely with children, colleagues and parents in a structured environment.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
  {
    title: "Full Stack Development Apprenticeship - GoIT",
    location: "Remote",
    description:
      "Built digital projects in a team setting, strengthening my understanding of interface structure, project organization and collaborative problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Jan 2025",
  },
  {
    title: "Substitute Educator - Waldorf Kindergarten",
    location: "Hamburg, Germany",
    description:
      "Adapted quickly to different teams and routines, combining communication, responsibility and creative support in day-to-day work with children and educators.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Nov 2024",
  },
] as const;

export const selectedWorkData = [
  {
    title: "Marmolio Olive Oil",
    description:
      "Packaging concept and label design exploring premium materials, restrained typography and a polished product presentation.",
    tags: [
      "Packaging Concept",
      "Label Design",
      "Typography",
      "Product Presentation",
    ],
    imageUrl: {
      src: "/images/packaging2.png",
      width: 900,
      height: 1200,
      alt: "Marmolio olive oil packaging concept",
    },
    actions: [
      {
        label: "View Packaging",
        href: "/design-gallery?category=packaging",
      },
    ],
  },
  {
    title: "Pazo de Rubianes",
    description:
      "Wine label design focused on contrast, material finish and a distinct visual identity for product presentation.",
    tags: ["Label Design", "Visual Identity", "Typography", "Print Finish"],
    imageUrl: {
      src: "/images/packaging6.png",
      width: 900,
      height: 1200,
      alt: "Pazo de Rubianes wine label design",
    },
    actions: [
      {
        label: "View Label Design",
        href: "/design-gallery?category=packaging",
      },
    ],
  },
  {
    title: "Cafe Termoli",
    description:
      "Brand identity exploration across packaging, cards and print touchpoints, balancing warmth, simplicity and brand consistency.",
    tags: [
      "Brand Identity Exploration",
      "Packaging Concept",
      "Print Collateral",
      "Brand Consistency",
    ],
    imageUrl: {
      src: "/images/branding9.png",
      width: 900,
      height: 1200,
      alt: "Cafe Termoli branding and packaging concept",
    },
    actions: [
      {
        label: "View Brand System",
        href: "/design-gallery?category=branding",
      },
    ],
  },
  {
    title: "DAVE Visual Identity",
    description:
      "A visual system applied to stationery and branded assets, with attention to hierarchy, consistency and presentation.",
    tags: [
      "Visual System",
      "Branding",
      "Stationery Mockups",
      "Brand Consistency",
    ],
    imageUrl: {
      src: "/images/branding10.png",
      width: 900,
      height: 1200,
      alt: "Stationery mockups for the DAVE visual identity",
    },
    actions: [
      {
        label: "View Branding",
        href: "/design-gallery?category=branding",
      },
    ],
  },
  {
    title: "My Kindergarten Friends",
    description:
      "Illustrated book cover and print layout project combining storytelling, page structure and a playful visual language.",
    tags: [
      "Book Layout",
      "Illustration",
      "Typography",
      "Visual Storytelling",
    ],
    imageUrl: {
      src: "/images/illustration1.png",
      width: 900,
      height: 650,
      alt: "My Kindergarten Friends book cover layout",
    },
    actions: [
      {
        label: "View Illustration Work",
        href: "/design-gallery?category=illustration",
      },
    ],
  },
  {
    title: "Tarteo Menu Layout",
    description:
      "Menu and print layout work built around clear hierarchy, playful illustration and easy-to-follow information design.",
    tags: [
      "Print Layout",
      "Menu Design",
      "Typography",
      "Information Design",
    ],
    imageUrl: {
      src: "/images/branding8.png",
      width: 900,
      height: 1200,
      alt: "Tarteo menu layout and printed card",
    },
    actions: [
      {
        label: "View Print Work",
        href: "/design-gallery?category=branding",
      },
    ],
  },
] as const satisfies readonly WorkItem[];

export const additionalWorkData = [
  {
    title: "Timeline Planning Tool",
    description:
      "A self-initiated project exploring how to visualize workload, timelines and team coordination. It reflects structured thinking, interface clarity and workflow design.",
    tags: [
      "UI Concept",
      "Project Planning",
      "Timeline",
      "Structure",
      "Workflow",
    ],
    imageUrl: {
      src: timelinePlanningToolImage,
      width: 1600,
      height: 900,
      alt: "Timeline Planning Tool interface preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://time-tracker-intern-git-main-madalinas-projects-354f52e7.vercel.app/",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/time-tracker-intern",
        external: true,
      },
    ],
  },
  {
    title: "SlimMom",
    description:
      "A budgeting app designed to make everyday tracking feel simpler through clear structure and a focused interface.",
    tags: ["Budgeting", "Tracking", "Clarity", "UI Structure"],
    imageUrl: {
      src: "/slim-mom.png",
      width: 500,
      height: 300,
      alt: "SlimMom budgeting app preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://madalinagomei.github.io/SlimMom/",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/SlimMom",
        external: true,
      },
    ],
  },
  {
    title: "MoneyGuard",
    description:
      "A personal finance interface focused on dashboard clarity, day-to-day organization and a more readable overview of spending.",
    tags: ["Dashboard", "Finance", "Structure", "Interface"],
    imageUrl: {
      src: "/project-money-guard.png",
      width: 500,
      height: 300,
      alt: "MoneyGuard finance dashboard preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://madalinagomei.github.io/project-money-guard/login",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/project-money-guard",
        external: true,
      },
    ],
  },
  {
    title: "Phonebook",
    description:
      "A contact manager centered on search, sorting and keeping everyday information easy to navigate.",
    tags: ["Search", "Organization", "Contacts", "Information Flow"],
    imageUrl: {
      src: "/phonebook.PNG",
      width: 500,
      height: 300,
      alt: "Phonebook app preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://madalinagomei.github.io/goit-react-hw-08-phonebook/",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/goit-react-hw-08-phonebook",
        external: true,
      },
    ],
  },
  {
    title: "IceCream",
    description:
      "A collaborative website project with a focus on presentation, teamwork and coordinating a responsive user experience.",
    tags: ["Team Project", "Responsive Layout", "Coordination", "Presentation"],
    imageUrl: {
      src: "/IceCream.PNG",
      width: 500,
      height: 300,
      alt: "IceCream website project preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://madalinagomei.github.io/team9-project/index.html",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/team9-project",
        external: true,
      },
    ],
  },
  {
    title: "Film",
    description:
      "A movie browsing project built around search, discovery and organizing a large set of content in a readable way.",
    tags: ["Discovery", "Search", "Catalog", "Content Structure"],
    imageUrl: {
      src: "/film.PNG",
      width: 500,
      height: 300,
      alt: "Film browsing project preview",
    },
    actions: [
      {
        label: "Demo",
        href: "https://madalinagomei.github.io/team3-JavaScriptProject/",
        external: true,
      },
      {
        label: "View Code",
        href: "https://github.com/madalinagomei/team3-JavaScriptProject",
        external: true,
      },
    ],
  },
] as const satisfies readonly WorkItem[];

export const galleryPreviewData = [
  {
    title: "Branding Systems",
    caption: "Stationery, identity applications and brand consistency.",
    src: "/images/branding10.png",
    alt: "Branding stationery system preview",
  },
  {
    title: "Packaging Concepts",
    caption: "Bottle labels, printed details and product presentation.",
    src: "/images/packaging2.png",
    alt: "Packaging concept preview",
  },
  {
    title: "Print and Illustration",
    caption: "Book layouts, covers and narrative visual work.",
    src: "/images/illustration1.png",
    alt: "Illustrated print layout preview",
  },
] as const;

export const skillsData = {
  designPrint: [
    "Graphic Design",
    "Branding",
    "Visual Identity",
    "Print Layout",
    "Packaging Concepts",
    "Typography",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
  ],
  visualCreative: [
    "Illustration",
    "Composition",
    "Color Systems",
    "Visual Storytelling",
  ],
  digitalStructure: [
    "UI Design",
    "Layout Systems",
    "Interface Thinking",
    "Basic React / Next.js",
  ],
} as const;

export const designGalleryCategories = [
  {
    key: "branding",
    label: "Branding",
  },
  {
    key: "packaging",
    label: "Packaging",
  },
  {
    key: "illustration",
    label: "Illustration & Layout",
  },
] as const;

export const designGalleryImages = {
  branding: [
    {
      src: "/images/branding1.png",
      alt: "Brand identity mockup",
      title: "Brand Identity Mockup",
      caption:
        "Logo direction and presentation applied to a clean branded surface.",
    },
    {
      src: "/images/branding2.png",
      alt: "Brand identity mockup",
      title: "Identity Application",
      caption: "A closer look at brand presentation and visual consistency.",
    },
    {
      src: "/images/branding3.png",
      alt: "Brand identity mockup",
      title: "Visual Identity Study",
      caption:
        "Brand-led composition exploring hierarchy, tone and presentation.",
    },
    {
      src: "/images/branding4.png",
      alt: "Branding mockup",
      title: "Branding Presentation",
      caption: "Print-based identity exploration shown through product mockups.",
    },
    {
      src: "/images/branding5.gif",
      alt: "Animated branding presentation",
      title: "Animated Identity Preview",
      caption: "A motion-based presentation of visual identity elements.",
    },
    {
      src: "/images/branding7.png",
      alt: "Branding layout",
      title: "Identity Detail",
      caption:
        "Focused brand application with a simple, structured composition.",
    },
    {
      src: "/images/branding8.png",
      alt: "Tarteo menu design",
      title: "Tarteo Menu Layout",
      caption:
        "Menu design with playful illustration and clear information structure.",
    },
    {
      src: "/images/branding9.png",
      alt: "Cafe Termoli print cards",
      title: "Cafe Termoli Print Cards",
      caption:
        "Printed cards and packaging details developed as part of a warm visual identity.",
    },
    {
      src: "/images/branding10.png",
      alt: "DAVE stationery system",
      title: "DAVE Stationery System",
      caption:
        "A branded stationery set showing consistency across multiple touchpoints.",
    },
  ],
  packaging: [
    {
      src: "/images/packaging1.gif",
      alt: "Packaging concept animation",
      title: "Packaging Motion Preview",
      caption:
        "Animated product presentation highlighting structure and finish.",
    },
    {
      src: "/images/packaging2.png",
      alt: "Marmolio olive oil label detail",
      title: "Marmolio Label Detail",
      caption: "Close-up view of the Marmolio olive oil packaging concept.",
    },
    {
      src: "/images/packaging3.png",
      alt: "Marmolio bottle concept",
      title: "Marmolio Bottle Study",
      caption:
        "Bottle form and packaging detail explored through product presentation.",
    },
    {
      src: "/images/packaging4.gif",
      alt: "Packaging concept animation",
      title: "Packaging Rotation",
      caption: "Animated product view emphasizing shape, label and material feel.",
    },
    {
      src: "/images/packaging5.png",
      alt: "Pazo de Rubianes wine label",
      title: "Pazo de Rubianes Label",
      caption:
        "Wine label design built around contrast, texture and a clear focal mark.",
    },
    {
      src: "/images/packaging6.png",
      alt: "Pazo de Rubianes wine bottle mockup",
      title: "Pazo de Rubianes Presentation",
      caption: "Final bottle presentation showing the label in context.",
    },
  ],
  illustration: [
    {
      src: "/images/illustration1.png",
      alt: "My Kindergarten Friends book cover",
      title: "My Kindergarten Friends",
      caption:
        "Illustrated cover layout designed around storytelling and character-based composition.",
    },
    {
      src: "/images/illustration2.png",
      alt: "Book interior spread",
      title: "Book Interior Spread",
      caption:
        "Interactive print layout balancing information, illustration and white space.",
    },
    {
      src: "/images/illustration3.png",
      alt: "Book interior layout",
      title: "Illustrated Layout System",
      caption:
        "Page structure developed to stay playful, readable and easy to use.",
    },
    {
      src: "/images/illustration4.png",
      alt: "Childhood Diary book covers",
      title: "Childhood Diary Covers",
      caption:
        "Cover exploration combining illustration with a gentle editorial feel.",
    },
    {
      src: "/images/illustration5.png",
      alt: "Illustrated spread",
      title: "Illustrated Book Spread",
      caption: "Print layout with soft illustration and a calm visual rhythm.",
    },
    {
      src: "/images/illustration6.png",
      alt: "Illustration project",
      title: "Illustration Study",
      caption: "Visual storytelling through character work and composition.",
    },
    {
      src: "/images/illustration7.png",
      alt: "Illustration project",
      title: "Character Illustration",
      caption: "Illustration work focused on shape, color and expression.",
    },
    {
      src: "/images/illustration7-1.png",
      alt: "Illustration project detail",
      title: "Character Detail",
      caption:
        "A closer look at the visual language of the illustration series.",
    },
    {
      src: "/images/illustration13.png",
      alt: "Illustration project",
      title: "Illustration Composition",
      caption: "Narrative illustration arranged with strong visual balance.",
    },
    {
      src: "/images/illustration13-1.png",
      alt: "Illustration project detail",
      title: "Illustration Detail",
      caption: "Supporting illustration detail from the same series.",
    },
    {
      src: "/images/illustration14.png",
      alt: "Illustration project",
      title: "Illustration Concept",
      caption: "An image-focused composition exploring mood and clarity.",
    },
    {
      src: "/images/illustration15.png",
      alt: "Illustration project",
      title: "Narrative Visual",
      caption: "Illustrated storytelling designed for a print-based context.",
    },
    {
      src: "/images/illustration16.png",
      alt: "Illustration project",
      title: "Illustrated Scene",
      caption: "Scene-building through color, form and composition.",
    },
    {
      src: "/images/illustration12-1.png",
      alt: "Illustration project",
      title: "Illustration Study",
      caption: "Exploring a more expressive and graphic visual approach.",
    },
    {
      src: "/images/illustration16-1.png",
      alt: "Illustration project detail",
      title: "Illustration Detail",
      caption: "Close-up detail from a broader illustration series.",
    },
    {
      src: "/images/illustration8.png",
      alt: "Illustration project",
      title: "Visual Storytelling Study",
      caption: "Illustration centered on shape, pacing and readability.",
    },
    {
      src: "/images/illustration9.png",
      alt: "Illustration project",
      title: "Illustrated Poster Style",
      caption: "A composition-focused piece with a strong visual silhouette.",
    },
    {
      src: "/images/illustration10.png",
      alt: "Illustration project",
      title: "Illustration Layout",
      caption: "A print-ready composition combining image and page balance.",
    },
    {
      src: "/images/illustration12.png",
      alt: "Illustration project",
      title: "Illustrated Cover Study",
      caption: "Cover-focused exploration of composition and title placement.",
    },
    {
      src: "/images/illustration17.png",
      alt: "Illustration project",
      title: "Illustration Composition",
      caption: "Visual storytelling shaped by character and atmosphere.",
    },
    {
      src: "/images/illustration18.png",
      alt: "Illustration project",
      title: "Illustration Final",
      caption:
        "A final illustration view presented as part of the wider series.",
    },
  ],
} as const;
