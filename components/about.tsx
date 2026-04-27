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
      className="mb-32 w-full max-w-[46rem] scroll-mt-28 text-left sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <p className="text-lg leading-9 text-gray-700 dark:text-white/70">
        I come from a graphic design background, with a Master&apos;s degree in
        visual arts and additional studies in pedagogy.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700 dark:text-white/70">
        Over time, I worked across different roles - from education to
        hands-on creative work - which shaped the way I approach design today:
        structured, patient and detail-oriented.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700 dark:text-white/70">
        I enjoy building clear layouts, visual systems and design concepts that
        are not only visually appealing, but also practical and easy to use.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700 dark:text-white/70">
        I&apos;m particularly interested in projects where design meets
        real-world constraints - print, packaging, branding, layout or
        anything that needs to work beyond the screen.
      </p>
    </motion.section>
  );
}
