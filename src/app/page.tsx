import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { FloatingBar } from "@/components/floatingNav";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import SocialLinks from "@/components/sosialLink";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
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
