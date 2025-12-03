import { motion } from "framer-motion";
import photo from "../assets/profile.jpeg";

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];
  const stats = [
    { label: "Speciality", value: "React Frontend Development" },
    { label: "Experience", value: "1+ years" },
    { label: "Focus", value: "Building clean, scalable UIs" },
  ];
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white overflow-hidden w-full flex items-center justify-center relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c: string, i: number) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] ${c}`}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }} //animate once only when 40% of section is visible
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={photo} alt="profile" className="absolute inset-0 " />
          </motion.div>
          <div className="flex-1 flex justify-center text-center flex-col md:text-left">
            <p className="mt-2 text-xl text-white/90 font-semibold">
              Nice to meet you!
            </p>
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              I'm Palak
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl">
              I’m a Frontend Developer who enjoys building clean, scalable, and
              intuitive user interfaces. At ShipGlobal and Gulp2Go, I’ve worked
              on product modules used by franchise partners, vendors, and
              end-customers, improving performance, usability, and overall
              experience across web and mobile platforms. My work spans
              developing reusable UI components, improving load times,
              integrating REST APIs, and delivering responsive interfaces using
              React, TypeScript, Tailwind, Redux, Shadcn, and custom hooks.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-sm md:text-base font-semibold">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I love creating clean UI systems, optimizing performance, and
            turning ideas into fast, responsive interfaces. I work closely with
            Agile teams to ship high-quality, user-focused products.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I’ve also built feature-rich systems like the Vending Machine
            WebApp, franchise and vendor dashboards, and the SightGuide iOS app
            during my internship at Infosys.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
