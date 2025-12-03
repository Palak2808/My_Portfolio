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
