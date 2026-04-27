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

  return (
    <section id="additional-work" className="mb-32 w-full max-w-[72rem] sm:mb-40">
      <SectionHeading>Additional Work</SectionHeading>
      <p className="mx-auto mb-12 max-w-[42rem] text-center text-lg leading-8 text-gray-700 dark:text-white/70">
        Additional projects exploring structure, interfaces and problem-solving
        through digital tools.
      </p>

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        {homepageAdditionalWorkData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} compact />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
