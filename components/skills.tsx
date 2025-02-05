"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
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

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-20 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      {/* Tech Stack Section */}
      <h3 className="text-xl font-semibold mb-4 mt-6">Tech Stack</h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.techStack.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-full px-5 py-3 dark:bg-white/10 dark:text-white/80"
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

      {/* Tools & Design Section */}
      <h3 className="text-xl font-semibold mb-4 mt-10">Tools & Design</h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.toolsAndDesign.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-full px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
    </section>
  );
}
