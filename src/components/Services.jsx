import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Cloud Services",
      desc: "Secure and scalable cloud infrastructure"
    },
    {
      title: "Web Development",
      desc: "Modern responsive web applications"
    },
    {
      title: "App Development",
      desc: "High performance mobile apps"
    }
  ];

  return (
    <div className="relative bg-transparent text-white py-24 px-6 md:px-12 overflow-hidden">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold text-center mb-16"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative p-7 rounded-2xl 
            bg-[#12121A]/70 backdrop-blur-xl 
            border border-white/5 
            transition-all duration-300 
            hover:border-purple-500/30 
            hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >

            {/* subtle glow layer */}
            <div className="absolute inset-0 rounded-2xl opacity-0 
            bg-gradient-to-br from-purple-500/10 to-pink-500/10 
            transition duration-300 group-hover:opacity-100"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* small top line */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mb-5 
              group-hover:w-20 transition-all duration-300"></div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 
              group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}