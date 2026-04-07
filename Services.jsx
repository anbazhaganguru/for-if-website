import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Cloud Services",
      desc: "Scalable and secure cloud solutions"
    },
    {
      title: "Web Development",
      desc: "Modern responsive websites"
    },
    {
      title: "App Development",
      desc: "High performance mobile apps"
    }
  ];

  return (
    <div className="bg-[#0A0A0F] text-white py-16 px-8">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#12121A] border border-purple-600 rounded"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}