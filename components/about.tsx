"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I have a background in graphic design and pedagogical training,
        combining creativity with educational practice.
      </p>

      <br />

      <p>
        My work focuses on visual communication, illustration and creative
        learning projects.
      </p>

      <br />

      <p>
        Through my experience in kindergartens and artistic projects, I
        developed a strong interest in using art as a tool for expression,
        development and communication.
      </p>
    </motion.section>
  );
}
