import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div id="about" className="relative bg-transparent text-white py-24 px-6 md:px-12 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FOR-IF
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
            FOR-IF is a modern tech company focused on building scalable,
            high-performance digital solutions. We transform ideas into powerful,
            production-ready products with clean architecture and innovative thinking.
          </p>

          {/* 🔥 INLINE HIGHLIGHTS */}
          <div className="flex flex-wrap gap-6 text-sm">

            {[
              "Scalable Systems",
              "High Performance",
              "Clean Architecture"
            ].map((item, i) => (
              <span
                key={i}
                className="relative text-gray-400 cursor-pointer 
                transition duration-300 group"
              >
                {/* TEXT */}
                <span className="group-hover:text-white transition">
                  {item}
                </span>

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-gradient-to-r from-purple-500 to-pink-500 
                transition-all duration-300 group-hover:w-full"></span>

                {/* SOFT GLOW */}
                <span className="absolute inset-0 opacity-0 
                bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                blur-md transition duration-300 group-hover:opacity-100"></span>
              </span>
            ))}

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          <div className="w-full h-80 rounded-xl 
          bg-[#12121A] border border-white/10 
          overflow-hidden relative group 
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

            {/* IMAGE */}
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-cover 
  transition duration-500 group-hover:scale-105"
            />

            {/* SOFT GLOW */}
            <div className="absolute w-32 h-32 bg-purple-500/20 blur-2xl 
            top-6 left-6 opacity-70"></div>

            {/* BORDER LIGHT */}
            <div className="absolute inset-0 rounded-xl border border-white/5 
            group-hover:border-purple-500/30 transition"></div>

          </div>
        </motion.div>

      </div>

    </div>
  );
}