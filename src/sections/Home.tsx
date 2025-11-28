import { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import avatar from "../assets/avator.png";

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "Software Developer", "Frontend Developer"],
    []
  );
  const socials = [
    { Icon: FiGithub, label: "GitHub", link: "https://github.com/Palak2808" },
    {
      Icon: FiLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/palak-98b133229/#main-content",
    },
  ];
  const glowVariants = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      scale: 1.2,
      y: -3,
      filter:
        "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
  };
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleteing, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleteing && subIndex < currentRole.length)
          setSubIndex((v) => v + 1);
        else if (!deleteing && subIndex === currentRole.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleteing && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleteing && subIndex === 0) {
          setDeleting(false);
          setIndex((v) => (v + 1) % roles.length);
        } //jumps to whole array
      },
      deleteing ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleteing, roles]);
  return (
    <section
      className="w-full h-screen relative bg-black overflow-hidden"
      id="home"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500" />
      </div>
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center h-full lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl md:text-3xl font-semibold lg:text-4xl text-white tracking-white min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className="text-white mt-2 text-4xl md:text-6xl font-bold lg:text-8xl lg:whitespace-nowrap">
                Palak
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              React Frontend Developer skilled in building scalable interfaces
              using React, TypeScript, Tailwind, Redux, and modern development
              tooling. Proven ability to optimize UI performance, create
              reusable component systems, and collaborate effectively in Agile
              teams to deliver high-quality user experiences.
            </motion.p>
            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="projects"
                className="py-3 rounded-full font-medium text-lg text-white px-6 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="/CV-Palak-Frontend"
                download
                className="px-6 py-3 text-lg rounded-full font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>
            <div className="flex mt-8 text-2xl gap-5 md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, link }, idx) => (
                <motion.a
                  href={link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px",
              width: "min(22vw,410px)",
              height: "min(40vw,760x)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background: "conic-gradient(from 0deg,#1cd8d2,#00bf8f,#1cd8d2)",
            }}
          />
          <motion.img
            src={avatar}
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(45vw,780px",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
