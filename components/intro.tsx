"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
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
      className="mb-28 max-w-[70rem] sm:mb-0 scroll-mt-[100rem] mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        {/* image left */}
        <div className="relative">
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
              className="h-500 w-400 object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Text and Links on the right */}
        <div className="flex flex-col items-start text-left">
          <motion.p
            className="mb-10 text-2xl sm:text-4xl leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, there! </span>
            I&apos;m Madalina, a <span className="font-bold">
              {" "}
              developer
            </span>{" "}
            with a background in{" "}
            <span className="font-bold">graphic design and education. </span>
          </motion.p>

          {/* Contact and Download buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV_Madalina_Gomei_FullStack.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            {/* icons side by side  */}
            <div className="flex gap-4 sm:flex-row">
              <a
                className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center ml-2 gap-2 rounded-full opacity-80 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white dark:text-white/60"
                href="https://www.linkedin.com/in/madalina-gomei/"
                target="_blank"
              >
                <BsLinkedin className="text-gray-700" />
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] opacity-80 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white dark:text-white/60"
                href="https://github.com/madalinagomei"
                target="_blank"
              >
                <FaGithubSquare className="text-gray-700" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
