import About from "@/components/about";
import AdditionalWork from "@/components/additional-work";
import Intro from "@/components/intro";
import Design from "@/components/design";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-4 sm:px-6">
      <Intro />
      <About />
      <Design />
      <Skills />
      <AdditionalWork />
      <Experience />
      <Contact />
    </main>
  );
}
