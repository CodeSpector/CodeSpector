// TODO: magnification
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HoverCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 20, y: e.clientY - 75 });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [position]);

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      animate={{ x: position.x, y: position.y }}
      className="hidden md:block fixed h-1 w-1 p-5 border-1 rounded-full touch-pinch-zoom pointer-events-none z-10"
    ></motion.div>
  );
};

export default HoverCircle;
