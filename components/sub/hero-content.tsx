"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const imgX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const imgY = useTransform(y, [-0.5, 0.5], [-20, 20]);
  const textX = useTransform(x, [-0.5, 0.5], [10, -10]);
  const textY = useTransform(y, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      animate="visible"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div style={{ x: textX, y: textY }} className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#ff6a008b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ff9a3c] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer & AI Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-[family-name:var(--font-orbitron)] font-black text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
              Harsh Gupta
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          B.Tech CSE student at GLA University. I build full-stack web apps and
          AI-powered tools — from RAG pipelines to GitHub automation bots.
          Check out my projects and skills below.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/20"
          >
            View Projects →
          </a>
          <a
            href="#about-me"
            className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 font-semibold text-sm hover:border-orange-400/50 hover:text-white transition-all duration-200"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.8)}
        style={{ x: imgX, y: imgY }}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
