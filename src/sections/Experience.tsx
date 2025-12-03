import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const experiences = [
  {
    role: "iOS App Developer Intern",
    company: "Infosys",
    duration: "May 2024 - June 2024",
    description:
      "Worked on iOS app development using Swift and Swift UI Kit. Collaborated in an Agile environment, implementing UI flows and application logic while improving app structure and component reusability.",
  },
  {
    role: "Software Developer",
    company: "ShipGlobal, New Delhi",
    duration: "Sept 2024 - July 2025",
    description:
      "Developed scalable web applications using React, TypeScript, Tailwind, and Redux. Built franchise, vendor, and admin panels, improving order processing time by 35%. Created 20+ reusable components, optimized performance, reduced production bugs by 15%, and collaborated using GitHub, Slack, and JIRA.",
  },
  {
    role: "Software Developer",
    company: "Gulp2Go Products Pvt Ltd., Gurugram",
    duration: "Aug 2025 - Present",
    description:
      "Contributed to cross-platform web and mobile applications featuring offers, ads, quizzes, and games, increasing daily engagement by 35%. Developed responsive UI components, improved load times by 40%, and built a Vending Machine WebApp supporting QR-based orders, OTP verification, and automated dispensing.",
  },
];
interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ExperienceItemProps {
  exp: Experience;
  idx: number;
  start: number;
  end: number;
  scrollYprogress: any;
  layout: "desktop" | "mobile";
}

function ExperienceItem({
  exp,
  idx,
  start,
  end,
  scrollYprogress,
  layout,
}: ExperienceItemProps) {
  const scale = useTransform(scrollYprogress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYprogress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYprogress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0]
  );
  const x = useTransform(scrollYprogress, [start, end], [-24, 0]);
  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)"
          style={{ scale, opacity }}
        />
        <motion.div
          className={`absolute ${
            idx % 2 === 0 ? "-top-8" : "-bottom-8"
          } w-[3px] bg-white/40`}
          style={{ height: 40, opacity }}
        />
        <motion.article
          className={`absolute ${
            idx % 2 === 0 ? "bottom-12" : "top-12"
          } bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[320px] shadow-lg`}
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="font-semibold text-xl">{exp.role}</h3>
          <p className="text-md text-gray-400 mb-3">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-gray-300 text-md break-words">{exp.description}</p>
        </motion.article>
      </div>
    );
  }
  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-[14px] z-10 w-7 h-7 rounded-full bg-white top-3 shadow-[0_0_0_8px_rgba(255,255,255,0.1)"
        style={{ scale, opacity }}
      />
      <motion.article
        className={`bg-gray-900/80 border border-gray-700/70 backdrop-blur rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg`}
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="font-semibold text-xl break-words">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>
        <p className="text-gray-300 text-sm break-words">{exp.description}</p>
      </motion.article>
    </div>
  );
}

function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    []
  );
  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <section id="experience" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-auto md:h-screen flex flex-col">
          <h2 className="text-5xl font-semibold mt-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            My Experience
          </h2>
          <div className="flex flex-1 items-center justify-center pb-10 px-4">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>
                <div className="relative flex justify-between mt-0">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYprogress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}
            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>
                <div className="relative flex flex-col gap-10 ml-10 mt-6 mb-28">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYprogress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
