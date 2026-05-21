"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { additionalWorkData } from "@/lib/data";
import Project from "./project";

export default function AdditionalWork() {
  const homepageAdditionalWorkTitles = [
    "Timeline Planning Tool",
    "MoneyGuard",
    "Film",
    "IceCream",
  ] as const;

  const homepageAdditionalWorkData = homepageAdditionalWorkTitles.flatMap(
    (title) => additionalWorkData.filter((project) => project.title === title)
  );
  const [featuredProject, ...supportingProjects] = homepageAdditionalWorkData;

  return (
    <section id="additional-work" className="mb-32 w-full max-w-[72rem] sm:mb-40">
      <SectionHeading>Digital Projects</SectionHeading>
      <p className="mx-auto mb-12 max-w-[42rem] text-center text-lg leading-8 text-gray-700 dark:text-white/70">
        Selected projects exploring interfaces, content structure and
        problem-solving through digital tools.
      </p>

      {featuredProject ? (
        <div className="mb-8">
          <Project {...featuredProject} />
        </div>
      ) : null}

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {supportingProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} compact />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
