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
        From designing children&apos;s books to building modern web apps, my
        background in graphic design fuels my passion for coding. My passion for
        programming led me to enroll in a coding bootcamp, where I transitioned
        into
        <span className="font-bold"> web development.</span>{" "}
      </p>
      <br></br>
      <p>
        {" "}
        I specialize in{" "}
        <span className="font-bold">
          React, TypeScript, Node.js and Next.js
        </span>{" "}
        with strong skills in{" "}
        <span className="font-bold">JavaScript, CSS, and HTML.</span> I love
        <span className="font-bold">
          {" "}
          problem-solving and constantly learning new technologies
        </span>{" "}
        to stay ahead of industry trends.{" "}
      </p>
      <br></br>
      <p>
        Beyond coding, I enjoy{" "}
        <span className="font-bold"> cycling and exploring new places </span>-
        git add .whether cities, mountains, or beaches. These experiences
        inspire my creativity and fresh perspectives on projects. These
        experiences inspire my creativity. I&apos;m also fascinated by{" "}
        <span className="font-bold">history and psychology</span>.
      </p>
      <br></br>
      <p>
        I&apos;m currently seeking a{" "}
        <span className="font-bold"> web developer</span> position where I can
        leverage my <span className="font-bold">diverse skill set </span> in
        dynamic and innovative environment.
      </p>
    </motion.section>
  );
}
