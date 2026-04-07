import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-[#0A0A0F] flex items-center justify-center z-[999]"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0.1em" }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold 
        bg-gradient-to-r from-purple-400 to-pink-400 
        bg-clip-text text-transparent"
      >
        FOR-IF
      </motion.h1>
    </motion.div>
  );
}