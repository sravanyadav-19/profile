import HeroStage from "@/components/HeroStage";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Full page:
// 1 ✅ palette · 2 ✅ hero · 3 ✅ About · 4 ✅ Skills · 5 ✅ Projects
// 6 ✅ Timeline · 7 ✅ Achievements · 8 ✅ Contact + Footer
export default function Home() {
  return (
    <main>
      <HeroStage />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
