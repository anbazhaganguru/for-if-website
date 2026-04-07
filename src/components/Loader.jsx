import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0A0A0F] flex items-center justify-center z-50">

      <motion.img
        src={logo}
        alt="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="h-20 md:h-28 object-contain 
drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
      />

    </div>
  );
}