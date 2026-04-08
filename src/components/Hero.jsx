import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 80; // navbar height adjust
  const top = el.offsetTop - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

export default function Hero() {
  return (
    <div id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-transparent text-white">


      {/* 🔥 BACKGROUND LOGO */}
      <img
        src={logo}
        alt="bg-logo"
        className="absolute 
  w-[250px] md:w-[400px] lg:w-[500px] 
  opacity-5 
  blur-[2px] 
  pointer-events-none 
  select-none"
      />


      {/* SUBTLE GRADIENT GLOW */}
      {/* <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl opacity-20 top-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500 to-purple-700 blur-3xl opacity-10 bottom-[-100px]"></div> */}

      {/* CONTENT */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl font-semibold leading-tight"
      >
        Build Your{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Digital Future
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 text-gray-400 max-w-xl text-sm md:text-base"
      >
        We create scalable, modern and powerful digital solutions that help
        businesses grow faster and smarter.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
<motion.button 
  onClick={() => scrollToSection("contact")}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 
  text-white shadow-[0_0_15px_#c026d3] hover:shadow-[0_0_25px_#ff2daa] transition"
>
  Get Started
</motion.button>

<motion.button
  onClick={() => scrollToSection("about")}
  whileHover={{ scale: 1.05 }}
  className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-pink-400 hover:text-white transition"
>
  Learn More
</motion.button>
      </motion.div>

    </div>
  );
}