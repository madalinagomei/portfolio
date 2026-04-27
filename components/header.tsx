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
    <header id="header" className="relative z-[999] overflow-x-hidden">
      <motion.div
        className="fixed left-1/2 top-0 hidden h-[4rem] w-screen max-w-[44rem] -translate-x-1/2 rounded-full border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:block sm:top-6 sm:h-[3.25rem] dark:border-white/10 dark:bg-gray-950/80"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="fixed left-1/2 top-[0.15rem] hidden h-12 -translate-x-1/2 py-2 md:block sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.92rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800/90"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <button
        className="fixed right-2 top-4 z-50 rounded-full bg-white p-2 shadow-lg dark:bg-gray-800 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="flex w-full max-w-xs flex-col items-center gap-4 rounded-lg bg-white p-6 text-gray-900 shadow-lg dark:bg-gray-900 dark:text-gray-100"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-xl font-medium"
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsOpen(false);
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
