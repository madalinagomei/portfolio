import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/45">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Madalina Gomei. All rights reserved.
      </small>
      <p className="text-xs">Built with Next.js, TypeScript and Tailwind CSS.</p>
    </footer>
  );
}
