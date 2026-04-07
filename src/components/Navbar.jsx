import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative flex justify-between items-center px-6 md:px-12 py-6 
      bg-[#0F0F17]/90 backdrop-blur-xl border-b border-purple-500/10 
      text-white sticky top-0 z-50"
    >

      {/* LOGO */}
      <h1 className="text-lg font-semibold tracking-wide 
      bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        FOR-IF
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 text-[13px] font-medium tracking-[0.1em]">

        {["Home", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative text-gray-400 uppercase 
            transition duration-300 group"
          >
            <span className="group-hover:text-white transition">
              {item}
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-gradient-to-r from-purple-500 to-pink-500 
            transition-all duration-300 group-hover:w-full"></span>
          </a>
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

            {["Home", "Services", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative text-gray-400 text-lg uppercase tracking-[0.15em] 
                transition duration-300 group"
              >
                <span className="group-hover:text-white transition">
                  {item}
                </span>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-gradient-to-r from-purple-500 to-pink-500 
                transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}