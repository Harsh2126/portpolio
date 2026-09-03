"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#ff6a008b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#ff9a3c] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">My Technical Arsenal</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-bold mt-[10px] text-center mb-[15px]"
      >
        Skills &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
          Technologies
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[16px] text-gray-400 mb-10 mt-[10px] text-center max-w-[600px]"
      >
        From building REST APIs to RAG pipelines — here&apos;s the stack I work with.
      </motion.div>
    </div>
  );
};
