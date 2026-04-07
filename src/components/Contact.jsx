import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative bg-transparent text-white py-20 px-6 md:px-12 overflow-hidden">

      {/* subtle glow */}
      {/* <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-3xl bottom-[-100px] left-[-100px]"></div> */}

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Have an idea or project in mind? Let’s build something amazing together.
            Reach out and we’ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#12121A]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6"
        >
          <div className="flex flex-col gap-4">

<input
  type="text"
  placeholder="Your Name"
  className="w-full p-4 rounded-xl 
  bg-[#0F0F17] 
  border border-white/10 
  text-white placeholder-gray-500 
  outline-none transition duration-300

  hover:border-purple-500/40
  focus:border-purple-500
  focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]
"
/>

<input
  type="email"
  placeholder="Your Email"
  className="w-full p-4 rounded-xl 
  bg-[#0F0F17] 
  border border-white/10 
  text-white placeholder-gray-500 
  outline-none transition duration-300

  hover:border-pink-500/40
  focus:border-pink-500
  focus:shadow-[0_0_20px_rgba(236,72,153,0.25)]
"
/>

<textarea
  rows="4"
  placeholder="Your Message"
  className="w-full p-4 rounded-xl 
  bg-[#0F0F17] 
  border border-white/10 
  text-white placeholder-gray-500 
  outline-none transition duration-300

  hover:border-purple-500/40
  focus:border-purple-500
  focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]
"
/>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 
              p-3 rounded-lg text-white 
              shadow-[0_0_15px_#c026d3] hover:shadow-[0_0_25px_#ff2daa] 
              transition"
            >
              Send Message
            </motion.button>

          </div>
        </motion.div>

      </div>

    </div>
  );
}