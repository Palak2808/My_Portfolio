import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  SiTypescript,
  SiVite,
  SiZod,
  SiAxios,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    // Proficient
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },

    // Frameworks / Libraries
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiZod />, name: "Zod" },
    { icon: <SiAxios />, name: "Axios" },
    { icon: <SiBootstrap />, name: "Bootstrap" },

    // Developer Tools
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  const repeated = [...skills, ...skills];
  const [direction, setDirection] = useState(-1); //controls movement direction:-1 → move left,1 → move right, This changes when user scrolls or swipes.
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef(null);
  const motionDirection = useMotionValue(0); //animation direction/value: left right: horizontally, Holds the current X-position of the scrolling track

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return; //Creates an IntersectionObserver that watches if the section enters the viewport.
    const io = new IntersectionObserver(
      ([entry]) =>
        setActive(entry.isIntersecting && entry.intersectionRatio >= 0.5), //To start animation only when visible,If the section is at least 50% visible
      { threshold: [0.1] }
    );
    io.observe(element);
    return () => io.disconnect();
  }, []);

  //detect touch and define position for the scroll(move)
  useEffect(() => {
    if (!active) return;
    const onWheel = (e: any) => setDirection(e.deltaY > 0 ? -1 : 1); //Scroll down → move left (-1), Scroll up → move right (1)
    const onTouchStart = (e: any) => (touchRef.current = e.touches[0].clientX); //value of the first touch on screen
    const onTouchMove = (e: any) => {
      if (touchRef.current == null) return;
      const delta = e.touches[0].clientX - touchRef.current;
      setDirection(delta > 0 ? 1 : -1); //swipe right:1, left:-1
      touchRef.current = e.touches[0].clientX; //update current touch position
    };
    window.addEventListener("wheel", onWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id: any;
    let last = performance.now(); //store last frame
    const speed = 80; //pixels per second
    const animate = (now: any) => {
      const timeDifference = (now - last) / 1000; //time difference in seconds
      last = now; //update frame
      let next = motionDirection.get() + direction * speed * timeDifference;
      let loop = 0;
      if (trackRef.current) {
        loop = trackRef.current.scrollWidth / 2;
      }

      if (loop) {
        //infinite carousel
        if (next <= -loop) next += loop; //right se vapis aao if goes to left
        else if (next >= 0) next -= loop; //left se vapis aao if goes to right
      }
      motionDirection.set(next); //Updates the horizontal position
      id = requestAnimationFrame(animate); //starts animation
    };
    id = requestAnimationFrame(animate); //start animation
    return () => cancelAnimationFrame(id); //cleanup on unmount
  }, [direction, motionDirection]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* glow circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full 
    bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
    animate-pulse opacity-20 blur-[120px]"
        />

        <div
          className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full 
    bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
    animate-pulse opacity-20 blur-[120px] delay-500"
        />
      </div>

      <motion.h2
        className="text-5xl mt-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My Skills
      </motion.h2>
      <motion.p className="mt-4 mb-8 text-white/90 text-base sm:text-lg z-10">
        Modern Application | Modern Technologies
      </motion.p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl text-[#1cd8d2] mt-5"
          style={{
            x: motionDirection,
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {repeated.map((skill: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={skill.name}
              title={skill.name}
            >
              <span className="hover:scale:125 transition-transfrom duration-300">
                {skill.icon}
              </span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
