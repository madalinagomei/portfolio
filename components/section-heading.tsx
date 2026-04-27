import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}
