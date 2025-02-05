import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Design from "@/components/design";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Design />
      <Skills />
      <TestimonialsCarousel />
      <Experience />
      <Contact />
    </main>
  );
}
//
