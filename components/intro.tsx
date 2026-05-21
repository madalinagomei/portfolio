"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-32 w-full max-w-[72rem] scroll-mt-[100rem] sm:mb-40"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[18rem] lg:max-w-[22rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Madalina_Gom.png"
              alt="Madalina portrait"
              width={978}
              height={1264}
              quality={95}
              priority={true}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="text-left">
          <motion.h1
            className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-[5.2rem]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Graphic & Digital Designer
          </motion.h1>

          <motion.p
            className="mt-8 max-w-[38rem] text-xl leading-8 text-gray-900 dark:text-white/85 sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I create visual identities, layouts and design systems with a
            structured and thoughtful approach.
          </motion.p>

          <motion.p
            className="mt-8 max-w-[42rem] text-lg leading-8 text-gray-700 dark:text-white/65"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My work combines graphic design, illustration and hands-on
            experience across different fields - shaping ideas into clear,
            functional and visually engaging results. I am also interested in
            digital interfaces, structured layouts and user-focused design that
            supports clear communication.
          </motion.p>

          <div className="mt-12 inline-flex flex-col items-center gap-8">
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 text-base font-medium sm:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <Link
                href="/design-gallery"
                className="rounded-full border border-black/10 bg-white px-7 py-3 text-gray-900 outline-none transition hover:scale-105 focus:scale-105 active:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white"
                onClick={() => {
                  setActiveSection("Gallery");
                  setTimeOfLastClick(Date.now());
                }}
              >
                View Design Gallery
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-black/10 bg-white px-7 py-3 text-gray-900 outline-none transition hover:scale-105 focus:scale-105 active:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-white/55"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
            >
              <a
                className="text-[1.85rem] opacity-65 transition hover:scale-[1.06] hover:opacity-100 dark:hover:text-white"
                href="https://www.linkedin.com/in/madalina-gomei/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a
                className="text-[2rem] opacity-65 transition hover:scale-[1.06] hover:opacity-100 dark:hover:text-white"
                href="https://github.com/madalinagomei"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
