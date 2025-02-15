"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
  demo: string;
  code: string;
};
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demo,
  code,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifică dacă click-ul s-a dat pe un buton și oprește propagarea
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      return;
    }

    window.open(demo, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        onClick={handleClick} // add click
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20" //sm:h-[20rem]
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-600 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/*  Live & GitHub */}
          <div className="flex gap-4 mt-4">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-black rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-400 transition"
            >
              Demo
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 text-black rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-400 transition"
            >
              Code
            </a>
          </div>
        </div>

        <Image
          src={imageUrl.src}
          alt={`Image for ${title}`}
          layout="responsive"
          width={imageUrl.width}
          height={imageUrl.height}
          quality={95}
          className="absolute hidden sm:block top-10 -right-80 rounded-t-lg -m-5 shadow-2xl
          transition 
        group-hover:scale-[1.02]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-80"
        />
      </section>
    </motion.div>
  );
}
