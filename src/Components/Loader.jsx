import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 2000);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.5, borderRadius: ["20%", "50%", "20%"] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-24 h-24 bg-[#5465FF]"
      ></motion.div>
    </div>
  );
};

export default Loader;