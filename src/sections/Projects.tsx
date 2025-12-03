// import { useEffect, useMemo, useRef, useState } from "react";
// import photo1 from "../assets/vmphone.png";
// import photo2 from "../assets/photoo2.png";
// import photo3 from "../assets/sgmobile.png";
// import img1 from "../assets/vm.png";
// import img2 from "../assets/ios.png";
// import img3 from "../assets/image.png";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll,
// } from "framer-motion";

// const useIsMobile = (query = "(max-width:639px)") => {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== undefined && window.matchMedia(query).matches
//   );
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const mql = window.matchMedia(query);
//     const handler = (event: any) => setIsMobile(event.matches);
//     mql.addEventListener("change", handler);
//     setIsMobile(mql.matches);
//     return () => mql.removeEventListener("change", handler);
//   }, [query]);
//   return isMobile;
// };

// export default function Projects() {
//   const isMobile = useIsMobile();
//   const sceneRef = useRef(null);
//   const projects = useMemo(
//     () => [
//       {
//         title: "SightGuide App",
//         link: "https://apps.apple.com/in/app/sightguide/id6737226581/",
//         bgColor: "#29292aff",
//         image: isMobile ? photo2 : img2,
//       },
//       {
//         title: "Cross-Border Franchise Model",
//         link: "https://shipglobal.in/",
//         bgColor: "#051c54ff",
//         image: isMobile ? photo3 : img3,
//       },
//       {
//         title: "Smart Vending System",
//         link: "http://app.punnyadhara.com/vm/1005/",
//         bgColor: "#ee477cff",
//         image: isMobile ? photo1 : img1,
//       },
//     ],
//     [isMobile]
//   );

//   const { scrollYProgress } = useScroll({
//     target: sceneRef,
//     offset: ["start start", "end end"],
//   });

//   const thresholds = projects.map((_, i) => (i + 1) / projects.length);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
//     const idx = thresholds.findIndex((threshold) => latest <= threshold);
//     setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
//   });

//   const activeProject = projects[activeIndex];

//   return (
//     <section
//       id="projects"
//       ref={sceneRef}
//       className="relative text-white"
//       style={{
//         height: `${100 * projects.length}vh`,
//         backgroundColor: activeProject.bgColor,
//         transition: "background-color 400ms ease",
//       }}
//     >
//       <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-semibold z-10 text-center mt-8">
//           Featured Projects
//         </h2>
//         <div
//           className={`relative w-full flex-1 flex items-center justify-center ${
//             isMobile && "-mt-4"
//           }`}
//         >
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500ms ${
//                 activeIndex === idx
//                   ? "opacity-100 z-20"
//                   : "opacity-0 z-0 sm:z-10"
//               }`}
//               style={{ width: "85%", maxWidth: "1200px" }}
//             >
//               <AnimatePresence mode="wait">
//                 {activeIndex === idx && (
//                   <motion.h3
//                     key={project.title}
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 30 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                     className={`block text-center text-[clamp(2rem,6vw,4.5rem)] text-white/95 sm:absolute sm:-top-20 sm-left-[35%] lg:left-[-5%] sm:mb-0 italic font-semibold ${
//                       isMobile && "-mt-24"
//                     }`}
//                     style={{
//                       zIndex: 5,
//                       textAlign: isMobile ? "center" : "left",
//                     }}
//                   >
//                     {project.title}
//                   </motion.h3>
//                 )}
//               </AnimatePresence>
//               <div
//                 className={`relative w-full overflow-hidden md:bg-black/20 md:shadow-2xl
//     ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"}`}
//                 style={{
//                   zIndex: 10,
//                   transition: "box-shadow 250ms ease",
//                 }}
//               >
//                 {/* Image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full md:object-cover md:drop-shadow-xl md:drop-shadow-2xl"
//                   style={{
//                     aspectRatio: isMobile ? "2/3" : "16/9", // Ensures perfect visibility on all screens
//                     width: "100%",
//                     height: "auto",
//                     filter: "drop-shadow(0px 16px 40px rgba(0,0,0,0.65))",
//                     transition: "filter 200ms ease",
//                   }}
//                   loading="lazy"
//                 />

//                 {/* Gradient Overlay */}
//                 <div
//                   className="pointer-events-none absolute inset-0"
//                   style={{
//                     zIndex: 11,
//                     background:
//                       "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%)",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
//           <a
//             href={activeProject?.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
//             aria-label={`View ${activeProject?.title}`}
//           >
//             View Project
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import img1 from "../assets/vm.png";
import img2 from "../assets/ios.png";
import img3 from "../assets/image.png";

export default function Projects() {
  const projects = [
    {
      title: "SightGuide iOS App",
      description:
        "SightGuide is an app designed to help blind and visually impaired users navigate indoor environments using auditory instructions and haptic feedback. The app offers real-time guidance and object detection, ensuring users move safely through indoor spaces. Whether identifying obstacles or guiding users along a clear path, SightGuide provides an intuitive, hands-free solution for indoor mobility.",
      link: "https://apps.apple.com/in/app/sightguide/id6737226581/",
      img: img2,
    },
    {
      title: "Cross-Border Franchise Model",
      description:
        "This targets local entrepreneurs to establish and manage the crucial first-mile logistics for cross-border e-commerce, offering a tech-first, low-investment alternative to traditional logistics franchises. The platform equips partners with a dedicated system to manage regional pickups, ensure compliance adherence, and grow their local logistics business.",
      link: "https://shipglobal.in/",
      img: img3,
    },
    {
      title: "Smart Vending System",
      description:
        "A QR-based smart vending UI designed for seamless product dispensing with analytics support. Users select items, review their cart, and complete payment through an integrated external payment app. Once the transaction is confirmed, a secure dispense code is generated in real time. Entering this code on the machine triggers the product dispensing mechanism.",
      link: "http://app.punnyadhara.com/vm/1005/",
      img: img1,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative bg-black text-white overflow-hidden"
    >
      <div className="absolute z-100 inset-0 pointer-events-none">
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

      <h2 className="text-center text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-24 md:gap-40 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => {
          const isEven = i % 2 === 0; // Even index → image left, text right

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full rounded-xl shadow-xl object-contain border border-[#1cd8d2]/25 transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
                <p className="text-gray-300 text-md mb-6">{p.description}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 w-max bg-white text-black font-semibold rounded-lg 
                  hover:bg-gray-200 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
