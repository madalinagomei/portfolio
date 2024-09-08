import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madalina Gomei | Personal Portfolio",
  description:
    "Madalina Gomei is a full-stack developer in transition, blending her expertise in graphic design and education. With a master's in Graphic Design, she creates visually engaging, user-friendly web applications and is passionate about leveraging her diverse skills in collaborative projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
