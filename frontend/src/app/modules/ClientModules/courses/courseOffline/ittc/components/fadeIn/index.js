import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7 }}
      variants={{
        visible: { x: 0, y: 0, opacity: 1, scale: 1 },
        hidden: { x: -300, y: -300, opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}