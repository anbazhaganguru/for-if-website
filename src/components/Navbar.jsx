import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import logo from "../assets/logo.svg";
import logon from "../assets/logon.svg";
import { useNavigate } from "react-router-dom";


  



export default function Navbar() {

  const navigate = useNavigate(); // ✅ inside component
  

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
    { name: "Solutions", id: "services" }, // temporary same section
    { name: "Blog", id: "about" }, // temporary
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const navItemClass =
    "relative text-gray-700 uppercase cursor-pointer tracking-[0.08em] transition duration-300 group";

  const underlineClass =
    "absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full";

  return (
<motion.nav
  initial={{ y: -60, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="sticky top-0 z-50 w-full 
px-6 md:px-12 py-4 
bg-gradient-to-r from-[#f3f0ff] via-[#ede9ff] to-[#f8f5ff] 
backdrop-blur-xl border-b border-purple-100 
shadow-[0_8px_30px_rgba(168,85,247,0.25),0_4px_20px_rgba(236,72,153,0.15)]"
>

      <div className="flex items-center justify-between">

        {/* 🔥 LOGO */}
        <div
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-14 transition group-hover:scale-105"
          />

          {/* <img
            src={logon}
            alt="logo-text"
            className="h-11 sm:h-12 md:h-13 lg:h-15 opacity-90 group-hover:opacity-100 transition"
          /> */}
        </div>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-[13px] font-medium">
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

        {/* 🔥 RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

{/* LOGIN ICON */}
<div
  onClick={() => navigate("/login")}
  className="p-2 rounded-lg cursor-pointer 
  hover:bg-purple-100 transition 
  active:scale-95"
>
  <FiUser className="text-gray-700 text-lg" />
</div>

          {/* CTA BUTTON */}
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

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex flex-col items-center gap-6 py-6 
            bg-gradient-to-r from-[#f3f0ff] via-[#ede9ff] to-[#f8f5ff] 
            border-t border-purple-100 md:hidden"
          >
            {menuItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setOpen(false);
                  scrollToSection(item.id);
                }}
                className="text-gray-700 text-lg uppercase tracking-[0.12em] cursor-pointer hover:text-purple-600"
              >
                {item.name}
              </div>
            ))}

{/* MOBILE LOGIN */}
<div
  onClick={() => {
    setOpen(false);
    navigate("/login");
  }}
  className="flex items-center gap-2 px-4 py-2 rounded-lg 
  bg-white/70 backdrop-blur-md 
  border border-purple-100 
  text-gray-700 cursor-pointer 
  hover:bg-purple-100 transition active:scale-95"
>
  <FiUser />
  <span className="text-sm font-medium">Login</span>
</div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => {
                setOpen(false);
                scrollToSection("contact");
              }}
              className="px-5 py-2 rounded-lg text-white text-sm 
              bg-gradient-to-r from-purple-600 to-pink-500"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}