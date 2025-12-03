import { useEffect, useRef, useState } from "react";
import OverLayMenu from "./OverLayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); //whether the overlay menu is open
  const [visible, setVisible] = useState(true); //whether the navbar is visible
  const [forceVisible, setforceVisible] = useState(false); //Forces navbar to remain visible when at the top

  const lastScrollY = useRef(0); //store posoition for last scroll
  const timerId = useRef(0);
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver( //Create an observer to watch when #home is in the viewport.
      ([entry]) => {
        if (entry.isIntersecting) {
          setforceVisible(true);
          setVisible(true); //If near the top, navbar must stay visible and ignore auto-hide logic.
        } else setforceVisible(false);
      },
      { threshold: 0.1 } //at least 10% of the home section is visible
    );
    if (homeSection) observer.observe(homeSection); //Start observing.
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        //If near top section → navbar always visible.
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        //scrolling down
        setVisible(false);
      } else {
        //scrolling up
        setVisible(true);
      }
      if (timerId.current) clearTimeout(timerId.current);
      timerId.current = setTimeout(() => {
        //If user stops scrolling → hide navbar after 2 seconds.
        setVisible(false);
      }, 2000);
      lastScrollY.current = currentScrollY; //Update last scroll position.
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="font-bold text-2xl text-white sm:block">Palak</p>
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>
        <div className="hidden lg:block">
          <a
            href="#Contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 px-5 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>
      <OverLayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
