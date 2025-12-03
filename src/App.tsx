import { useState } from "react";
import CustomCusrsor from "./components/CustomCusrsor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
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
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Footer />
        </div>
      )}
    </>
  );
}
