import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
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
      transition: { type: "spring" as const, stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
  };
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.25),transparent_70%)]" />
      <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
      >
        <h1
          className="font-semibold leading-none text-white text-center text-4xl md:text-7xl"
          style={{
            letterSpacing: "0.02rem",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0 2px 18px rgba(0,0,0,0.45)",
          }}
        >
          Let's Work Together!
        </h1>
        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emarld-400" />
        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map((social, idx) => (
            <motion.a
              href={social.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 transition-colors duration-200 inline-block items-center"
            >
              <social.Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-300 italic max-w-xl">
          If you’re looking to build reliable, performant, and visually polished
          web applications — I’d love to collaborate.
        </p>
      </motion.div>
    </footer>
  );
}
