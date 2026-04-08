import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";
import logon from "../assets/logon.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const top = el.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const navItemClass =
    "relative text-gray-600 uppercase cursor-pointer tracking-[0.1em] transition duration-300 group";

  const underlineClass =
    "absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-4 z-50 mx-auto w-[95%] md:w-[90%] 
      px-6 md:px-12 py-4 
      rounded-2xl 
      bg-gradient-to-r from-[#f3f0ff] via-[#ede9ff] to-[#f8f5ff] 
      backdrop-blur-xl border border-white/40 
      shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
    >

      {/* CONTENT */}
      <div className="flex items-center justify-between">

        {/* 🔥 LOGO (LAYER STYLE) */}
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-8 md:h-10 
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] 
            transition group-hover:scale-105"
          />

          <img
            src={logon}
            alt="logo-text"
            className="h-6 md:h-7 
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)] 
            opacity-90 group-hover:opacity-100 transition"
          />
        </div>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-[13px] font-medium">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={navItemClass}
            >
              <span className="group-hover:text-purple-600 transition">
                {item.name}
              </span>
              <span className={underlineClass}></span>
            </div>
          ))}
        </div>

        {/* 🔥 CTA BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-lg text-white text-sm 
            bg-gradient-to-r from-purple-600 to-pink-500 
            shadow-md hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>

        {/* 🔥 MOBILE ICON */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <FiX /> : <FiMenu />}
          </motion.div>
        </div>

      </div>

      {/* 🔥 MOBILE MENU (MATCH SAME STYLE) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex flex-col items-center gap-6 py-6 
            rounded-xl 
            bg-gradient-to-r from-[#f3f0ff] via-[#ede9ff] to-[#f8f5ff] 
            backdrop-blur-xl border border-white/40"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                onClick={() => {
                  setOpen(false);
                  scrollToSection(item.id);
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-gray-700 text-lg uppercase tracking-[0.15em] cursor-pointer group"
              >
                <span className="group-hover:text-purple-600 transition">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}