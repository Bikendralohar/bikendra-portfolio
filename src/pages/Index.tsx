import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Aspirations } from "@/components/Aspirations";
import { Conclusion } from "@/components/Conclusion";
import { Footer } from "@/components/Footer";

const Index = () => <div className="min-h-screen bg-background">
  <Navigation />
  <Hero />
  <About />
  <Resume />
  <Projects />
  <Skills />
  <Experience />
  <Aspirations />
  <Conclusion />
  <Footer />
</div>;
export default Index;
