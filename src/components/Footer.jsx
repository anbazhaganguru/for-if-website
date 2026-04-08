import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import logon from "../assets/logon.svg";

export default function Footer() {
  return (
    <div className="relative 
    bg-gradient-to-r from-[#f3f0ff] via-[#ede9ff] to-[#f8f5ff] 
    text-gray-600 pt-16 pb-6 px-6 md:px-12 border-t border-purple-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* 🔥 BRAND */}
        <div>
          <div className="flex gap-2.5 items-center mb-4">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
            <img src={logon} alt="logo" className="h-6 md:h-7" />
          </div>

          <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
            Building scalable and modern digital solutions for startups and businesses.
          </p>
        </div>

        {/* 🔥 LINKS */}
        <div>
          <h3 className="text-gray-800 mb-4 font-semibold tracking-wide">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm font-medium">
            {["Home", "Services", "Solutions", "Blog", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <span
                  className="relative cursor-pointer group text-gray-600 hover:text-purple-600 transition"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 SOCIAL */}
        <div>
          <h3 className="text-gray-800 mb-4 font-semibold tracking-wide">
            Connect
          </h3>

          <div className="flex gap-4">
            {[FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 rounded-lg 
                bg-white/60 backdrop-blur-md 
                border border-purple-100 
                hover:border-purple-400 transition cursor-pointer"
              >
                <Icon className="text-gray-700 text-sm" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-purple-100 pt-4">
        © 2026 FOR-IF. All rights reserved.
      </div>

    </div>
  );
}