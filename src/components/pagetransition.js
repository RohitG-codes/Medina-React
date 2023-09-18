import React from "react";
import "./pagetransition.css";
import { motion } from "framer-motion";

const Paagetransition = ({children}) => {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
  );
};

export default Paagetransition;
