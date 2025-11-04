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
        My journey blends visual art, design, and technology. From illustrating
        children&apos;s books to designing brand identities and interactive
        websites, I love creating meaningful visual experiences.
      </p>

      <br />

      <p>
        With a background in graphic design and a deep interest in digital
        tools, I&apos;ve explored how creativity and technology can work
        together — from traditional illustration to modern web design and
        development.
      </p>

      <br />

      <p>
        I enjoy experimenting, learning, and finding ways to communicate ideas
        visually — whether through color, form, or code. My curiosity drives me
        to keep evolving, both as an artist and as a designer.
      </p>

      <br />

      <p>
        Outside of work, I find inspiration in travel, nature, and stories —
        they always remind me of the beauty of observation and imagination.
      </p>
    </motion.section>
  );
}
