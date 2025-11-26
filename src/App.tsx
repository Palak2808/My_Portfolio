import { useState } from "react";
import CustomCusrsor from "./components/CustomCusrsor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  return (
    <>
      {!introCompleted && (
        <IntroAnimation onFinish={() => setIntroCompleted(true)} />
      )}
      {introCompleted && (
        <div className="relative gradient text-white">
          <CustomCusrsor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
