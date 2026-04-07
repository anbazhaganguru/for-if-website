import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";
import logon from "../assets/logon.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔥 SCROLL FUNCTION (FIXED WITH OFFSET)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative flex justify-between items-center px-6 md:px-12 py-7 
      bg-[#0F0F17]/90 backdrop-blur-xl border-b border-purple-500/10 
      text-white sticky top-0 z-50"
    >

      {/* LOGO */}
       
       <div className="flex gap-3 items-center">
<img
  src={logo}
  alt="FOR-IF logo"
  className="h-8 md:h-14 object-contain cursor-pointer"
  onClick={() => scrollToSection("home")}
/>

<img
  src={logon}
  alt="FOR-IF logo"
  className="h-8 md:h-12 object-contain cursor-pointer"
  onClick={() => scrollToSection("home")}
/>

</div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 text-[13px] font-medium tracking-[0.1em]">

        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="relative text-gray-400 uppercase cursor-pointer 
            transition duration-300 group"
          >
            <span className="group-hover:text-white transition">
              {item.name}
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-gradient-to-r from-purple-500 to-pink-500 
            transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}

      </div>

      {/* MOBILE ICON */}
      <div
        className="md:hidden text-2xl cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full 
            bg-[#0F0F17]/95 backdrop-blur-xl 
            border-t border-white/10 
            flex flex-col items-center gap-6 py-8 md:hidden"
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
                transition={{ delay: i * 0.1 }}
                className="relative text-gray-400 text-lg uppercase tracking-[0.15em] 
                transition duration-300 group cursor-pointer"
              >
                <span className="group-hover:text-white transition">
                  {item.name}
                </span>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-gradient-to-r from-purple-500 to-pink-500 
                transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}