"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import type { WorkItem } from "@/lib/types";

type ProjectProps = WorkItem & {
  compact?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  actions,
  compact = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={clsx("group mb-4 sm:mb-8 last:mb-0", compact && "h-full")}
    >
      <article
        className={clsx(
          "overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-xl shadow-black/[0.04] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20",
          compact ? "h-full lg:h-[39rem]" : ""
        )}
      >
        <div
          className={clsx(
            compact ? "flex h-full flex-col" : "grid lg:grid-cols-[1.05fr,0.95fr]"
          )}
        >
          <div
            className={clsx(
              "order-2",
              compact ? "flex flex-1 flex-col p-6 sm:p-7" : "p-6 sm:p-8 lg:p-10"
            )}
          >
            <h3
              className={clsx(
                "font-semibold tracking-tight",
                compact ? "min-h-[3.5rem] text-2xl" : "text-2xl sm:text-3xl"
              )}
            >
              {title}
            </h3>
            <p
              className={clsx(
                "mt-4 leading-7 text-gray-700 dark:text-white/70",
                compact ? "text-base" : "text-base sm:text-lg"
              )}
            >
              {description}
            </p>

            <ul className={clsx("mt-6 flex flex-wrap gap-2", compact && "min-h-[4.5rem] content-start")}>
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-gray-900 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-white dark:bg-white/10 dark:text-white/75"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>

            {actions && actions.length > 0 ? (
              <div className={clsx("mt-8 flex flex-wrap gap-3", compact && "sm:mt-auto")}>
                {actions.map((action, index) => {
                  const className = clsx(
                    "rounded-full px-5 py-2.5 text-sm font-medium transition hover:scale-[1.02]",
                    index === 0
                      ? "bg-gray-900 text-white hover:bg-gray-950 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                      : "border border-black/10 bg-white text-gray-900 hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  );

                  if (action.external) {
                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {action.label}
                      </a>
                    );
                  }

                  return (
                    <Link key={action.label} href={action.href} className={className}>
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div
            className={clsx(
              "order-1 overflow-hidden border-black/10 bg-gray-100 dark:border-white/10 dark:bg-white/5",
              compact ? "border-b" : "border-b lg:border-b-0 lg:border-l"
            )}
          >
            {imageUrl ? (
              <div
                className={clsx(
                  "relative h-full w-full",
                  compact ? "h-60 sm:h-64 lg:h-60" : "min-h-[18rem] lg:min-h-[24rem]"
                )}
              >
                <Image
                  src={imageUrl.src}
                  alt={imageUrl.alt}
                  fill
                  sizes={
                    compact
                      ? "(max-width: 1024px) 100vw, 45vw"
                      : "(max-width: 1024px) 100vw, 40vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  unoptimized={imageUrl.src.endsWith(".gif")}
                />
              </div>
            ) : (
              <div className={clsx(
                "flex h-full items-end justify-between bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.08),_transparent_58%),linear-gradient(135deg,rgba(17,24,39,0.05),rgba(17,24,39,0.02))] p-6 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_58%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]",
                compact ? "h-60 sm:h-64 lg:h-60" : "min-h-[14rem]"
              )}>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-white/40">
                    Self-initiated
                  </p>
                  <p className="mt-3 max-w-[12rem] text-3xl font-semibold tracking-tight text-gray-900 dark:text-white/85">
                    {title}
                  </p>
                </div>
                <div className="grid gap-2 text-right text-sm text-gray-500 dark:text-white/45">
                  {tags.slice(0, 4).map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}
