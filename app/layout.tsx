import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madalina Gomei | Full-Stack Developer & Graphic Designer",
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
      <body
        className={
          "${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]"
        }
      >
        <div className="bg-[#f6b8e5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#c1eafd] absolute top-[-1rem] -z-10 left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
      </body>
    </html>
  );
}
// min 1:10
