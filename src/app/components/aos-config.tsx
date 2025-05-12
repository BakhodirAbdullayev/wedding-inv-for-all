"use client";
import { FC, useEffect } from "react";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
const AOSConfig: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false, mirror: true });
  }, []);
  return null;
};

export default AOSConfig;
