"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollDown() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2"
    >
      <button className="text-[#a9a05c] w-10 h-16 rounded-full flex justify-center items-center border-1 border-[#a9a05c]">
        <motion.div
          animate={{ y: [-5, 10, -5] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "backInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
    </motion.div>
  );
}
