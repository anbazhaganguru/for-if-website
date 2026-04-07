import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 LOADER */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* 🌌 MAIN APP */}
      <div className="relative bg-[#0A0A0F] text-white overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.18),transparent_40%)]"></div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;