"use client";

import { useEffect, useState } from "react"
import { motion } from "framer-motion";

const HoverCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX-100, y: e.clientY-100 });
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <motion.div animate={{x:position.x, y: position.y}} className="circle p-5 border-2"></motion.div>
  )
}

export default HoverCircle;