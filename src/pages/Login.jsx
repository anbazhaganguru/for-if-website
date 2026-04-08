import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center 
    px-9 bg-[#0F0F17] text-white overflow-hidden">

      {/* 🔥 BACK BUTTON */}
<div
  onClick={() => navigate("/")}
  className="absolute top-4 left-4 z-20 
  flex items-center gap-2 px-3 py-2 
  rounded-lg bg-white/5 backdrop-blur-md 
  border border-white/10 
  text-gray-300 cursor-pointer 
  active:scale-95 transition"
>
  <FiArrowLeft className="text-lg" />
  <span className="text-sm">Back</span>
</div>

      {/* 🔥 BACKGROUND LOGO */}
      <img
        src={logo}
        alt="bg-logo"
        className="absolute 
        w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] 
        opacity-5 blur-[2px] 
        pointer-events-none select-none"
      />

      {/* 🔥 GRADIENT GLOW */}
      <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-3xl top-[-100px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-pink-500/20 blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl 
        bg-[#12121A]/80 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_0_40px_rgba(168,85,247,0.2)]"
      >

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
          Login to{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            FOR-IF
          </span>
        </h2>

        {/* FORM */}
        <div className="flex flex-col gap-4">

          {/* EMAIL */}
          <div className="relative group">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg 
              bg-transparent border border-gray-700 
              outline-none 
              focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
              transition"
            />

            {/* glow line */}
            <div className="absolute inset-0 rounded-lg 
            border border-transparent 
            group-focus-within:border-purple-500/40 
            pointer-events-none"></div>
          </div>

          {/* PASSWORD */}
          <div className="relative group">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg 
              bg-transparent border border-gray-700 
              outline-none 
              focus:border-pink-500 focus:ring-1 focus:ring-pink-500 
              transition"
            />

            <div className="absolute inset-0 rounded-lg 
            border border-transparent 
            group-focus-within:border-pink-500/40 
            pointer-events-none"></div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 py-3 rounded-lg text-white 
            bg-gradient-to-r from-purple-600 to-pink-500 
            shadow-[0_0_20px_rgba(168,85,247,0.4)] 
            hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] 
            transition"
          >
            Login
          </motion.button>

        </div>

        {/* EXTRA */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{" "}
          <span className="text-purple-400 cursor-pointer hover:text-pink-400 transition">
            Sign up
          </span>
        </p>

      </motion.div>

    </div>
  );
}