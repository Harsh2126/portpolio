"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
    >
      <Image src={`/skills/${src}`} width={width} height={height} alt={name} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="text-gray-500 text-xs group-hover:text-orange-400 transition-colors duration-200">{name}</span>
    </motion.div>
  );
};
