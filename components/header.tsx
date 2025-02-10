"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="z-[999] relative overflow-x-hidden">
      {/* Navbar Desktop - hide mobil */}
      <motion.div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-screen max-w-[51rem] h-[4rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
    sm:top-6 sm:h-[3.25rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
          ${
            isOpen ? "hidden" : "md:flex"
          } transition-all duration-300 hidden md:block`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className={`fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ${
          isOpen ? "hidden" : "md:flex"
        }`}
      >
        <ul className="hidden md:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Button Hamburger (Mobil) */}
      <button
        className="md:hidden fixed top-4 right-2 z-50 bg-white p-2 rounded-full shadow-lg dark:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Meniu Mobil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 text-gray-900 dark:text-gray-100 w-full max-w-xs"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className="text-xl font-medium"
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsOpen(false); // close  meniu on click
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
