import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import logon from "../assets/logon.svg";

export default function Footer() {
  return (
    <div className="relative bg-transparent text-gray-400 pt-16 pb-6 px-6 md:px-12 border-t border-white/5">

      {/* subtle glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl bottom-[-150px] left-[-150px]"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">

        {/* BRAND */}
        <div>

    <div className="flex gap-3 items-center">

<img src={logo} alt="logo" className="h-14 mb-6" />
<img src={logon} alt="logo" className="h-14 mb-6" />

    </div>

          <p className="text-sm leading-relaxed text-gray-500">
            Building scalable and modern digital solutions for startups and businesses.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white mb-4 font-medium">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {["Home", "Services", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative group text-gray-400 hover:text-white transition"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white mb-4 font-medium">Follow Us</h3>

          <div className="flex gap-4">
            {[FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 rounded-lg bg-[#12121A] border border-white/10 
                hover:border-purple-500/40 transition cursor-pointer"
              >
                <Icon className="text-gray-300" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-sm text-gray-600 border-t border-white/5 pt-4 relative z-10">
        © 2026 FOR-IF. All rights reserved.
      </div>

    </div>
  );
}