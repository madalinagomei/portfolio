"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { selectedWorkData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.35);

  return (
    <section
      ref={ref}
      id="work"
      className="mb-28 w-full max-w-[72rem] scroll-mt-28 sm:mb-36"
    >
      <SectionHeading>Selected Work</SectionHeading>
      <p className="mx-auto mb-12 max-w-[44rem] text-center text-lg leading-8 text-gray-700 dark:text-white/70">
        A curated selection of branding, packaging, print and illustration-led
        work with a focus on hierarchy, clarity and visual consistency.
      </p>

      <div>
        {selectedWorkData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
