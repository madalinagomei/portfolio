"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">graphic design</span> and working on
        various projects—including product design, children's books, website
        design, and print materials—I decided to pursue my passion for
        programming. While continuing my role as an{" "}
        <span className="font-medium">educator</span>, I enrolled in a coding
        bootcamp and transitioned into{" "}
        <span className="font-medium">full-stack web development.</span> My core
        stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>{" "}
        , along with strong skills in JavaScript, CSS, and HTML. I'm passionate
        about{" "}
        <span className="italic">
          problem-solving and constantly learning new technologies
        </span>{" "}
        to stay up-to-date with industry trends.
      </p>

      <p>
        Outside of coding,{" "}
        <span className="italic">I enjoy cycling and exploring new places</span>
        —whether it's cities, mountains, or beaches. These adventures recharge
        me and often inspire my creative approach to projects. I'm also{" "}
        <span className="font-medium"> an avid learner</span> and currently
        exploring topics in{" "}
        <span className="font-medium">history and psychology</span>. I'm
        actively seeking a full-time position as a software developer to apply
        my diverse skill set in dynamic, challenging environments
      </p>
    </motion.section>
  );
}
