import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { FloatingBar } from "@/components/floatingNav";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import SocialLinks from "@/components/sosialLink";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <BackgroundBeams />
      <div className="max-w-7xl w-full relative z-10">
        <FloatingBar />
        <About />
        <SocialLinks />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
