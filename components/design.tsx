"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Design() {
  const { ref } = useSectionInView("Gallery", 0.3);

  return (
    <section
      id="design"
      ref={ref}
      className="mb-32 w-full max-w-[80rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Featured Design Work</SectionHeading>
      <p className="mx-auto max-w-[44rem] text-center text-lg leading-8 text-gray-700 dark:text-white/70">
        A selection of branding, packaging, illustration and print-based
        projects exploring layout, identity and visual storytelling.
      </p>

      <Link
        href="/design-gallery"
        className="group mt-12 block rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-gray-400/60 dark:focus-visible:ring-white/40"
      >
        <div className="overflow-hidden rounded-[2rem] bg-transparent">
          <div className="relative">
            <Image
              src="/cover-colage.png"
              alt="Collage of branding, packaging and illustration work"
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 80rem"
              className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </Link>

      <div className="mt-10 flex justify-center">
        <Link
          href="/design-gallery"
          className="rounded-full bg-gray-900 px-7 py-3 text-white transition hover:scale-[1.02] hover:bg-gray-950 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Open Design Gallery
        </Link>
      </div>
    </section>
  );
}
