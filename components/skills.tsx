"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const skillGroups = [
    {
      title: "Design & Print",
      items: skillsData.designPrint,
    },
    {
      title: "Visual Thinking",
      items: skillsData.visualThinking,
    },
    {
      title: "Structure & Digital",
      items: skillsData.digitalStructure,
    },
  ] as const;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-32 w-full max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <p className="mx-auto mb-10 max-w-[36rem] text-center text-base leading-7 text-gray-700 dark:text-white/65">
        A mix of visual design, print-oriented thinking and structured digital
        workflows.
      </p>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-lg font-semibold tracking-tight">
              {group.title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2.5 text-sm text-gray-800 dark:text-white/85">
              {group.items.map((skill, index) => (
                <motion.li
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-[0.88rem] font-medium dark:border-white/10 dark:bg-white/10"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
