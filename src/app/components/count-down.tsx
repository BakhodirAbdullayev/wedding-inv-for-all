"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const uzbekTimeUnits = {
  days: "kun",
  hours: "soat",
  minutes: "daqiqa",
  seconds: "soniya",
};

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      data-aos="fade-up"
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, delay: 0.8 }}
      className={`${playfair.className} text-center mt-4 pb-3`}
    >
      <h2 className="text-xl text-[#a9a05c] mb-4 font-medium italic">
        To'ygacha qolgan vaqt
      </h2>
      <div className="flex justify-center space-x-6">
        {Object.entries(timeLeft).map(([unit, value]) => {
          return (
            <div key={unit} className="flex flex-col items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-3xl font-bold text-[#a9a05c]"
                >
                  {value}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-[#a9a05c] mt-1 italic">
                {uzbekTimeUnits[unit as keyof typeof uzbekTimeUnits]}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
