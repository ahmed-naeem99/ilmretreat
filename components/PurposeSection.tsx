"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const bubbles = [
  { text: "Understand · Convey · Apply", x: "-left-2 lg:left-0", y: "top-[8%]", delay: 0, duration: 6 },
  { text: "A Constitution to Live By", x: "right-0 lg:right-4", y: "top-[15%]", delay: 1.2, duration: 7.5 },
  { text: "Softens Hearts · Shapes Actions", x: "-left-2 lg:left-8", y: "top-[38%]", delay: 0.6, duration: 8 },
  { text: "Recitation & Reflection", x: "right-0 lg:right-0", y: "top-[45%]", delay: 2, duration: 6.5 },
  { text: "Workshops · Exhibitions · Art", x: "left-4 lg:left-12", y: "top-[65%]", delay: 1.5, duration: 7 },
  { text: "Find Your Path with the Quran", x: "right-2 lg:right-6", y: "top-[72%]", delay: 0.3, duration: 9 },
];

function FloatingBubble({
  text, delay, duration, className,
}: {
  text: string; delay: number; duration: number; className: string;
}) {
  return (
    <motion.div
      className={`absolute ${className} z-20 max-w-[180px] lg:max-w-[220px]`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass-card neon-border rounded-2xl px-4 py-3 backdrop-blur-md"
      >
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-2"
        />
        <p className="text-white/80 text-xs font-medium leading-snug">{text}</p>
      </motion.div>
    </motion.div>
  );
}

export default function PurposeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Deep background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070d20] to-[#050b18] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="relative flex flex-col items-center">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-blue-400/40" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">This Year's Theme</span>
            <div className="h-px w-10 bg-blue-400/40" />
          </motion.div>

          {/* Theme title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-3 max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Quran: An Explanation of All Things
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-blue-300/70 text-2xl lg:text-3xl mb-14 text-center"
            style={{ fontFamily: "var(--font-arabic)", direction: "rtl" }}
          >
            تِبْيَانًا لِكُلِّ شَيْءٍ
          </motion.p>

          {/* Central Quran + floating bubbles layout */}
          <div className="relative w-full flex justify-center items-center min-h-[520px] lg:min-h-[640px]">

            {/* Floating bubbles — positioned absolutely around Quran */}
            <FloatingBubble text="Understand · Convey · Apply" delay={0} duration={6}
              className="left-0 lg:left-4 top-[5%]" />
            <FloatingBubble text="A Constitution to Live By" delay={1.2} duration={7.5}
              className="right-0 lg:right-4 top-[10%]" />
            <FloatingBubble text="Softens Hearts · Shapes Actions" delay={0.6} duration={8}
              className="left-0 lg:left-8 top-[40%]" />
            <FloatingBubble text="Recitation & Reflection" delay={2} duration={6.5}
              className="right-0 lg:right-2 top-[42%]" />
            <FloatingBubble text="Workshops · Exhibitions · Art" delay={1.5} duration={7}
              className="left-4 lg:left-16 bottom-[8%]" />
            <FloatingBubble text="Find Your Path to Carry It Forward" delay={0.8} duration={9}
              className="right-2 lg:right-10 bottom-[5%]" />

            {/* Glowing Quran — center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Outer glow rings */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl scale-125"
              />
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute inset-0 rounded-full bg-blue-300/10 blur-3xl scale-150"
              />

              {/* Floating animation on the Quran itself */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/glowing-quran.png"
                  alt="Glowing Quran"
                  width={320}
                  height={380}
                  className="w-[220px] lg:w-[280px] xl:w-[320px] object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 60px rgba(74,158,255,0.6)) drop-shadow(0 0 30px rgba(74,158,255,0.3)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Purpose text below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-2xl text-center"
          >
            <p className="text-white/50 text-base lg:text-lg leading-relaxed">
              This year's Ilm Retreat is about returning to the Qur'an — not just as words we recite, but as a{" "}
              <span className="text-white/80 font-medium">guide to live by</span>. Through reflection, learning,
              and shared experiences, we hope to create a space where the Qur'an softens our hearts, shapes our actions,
              and becomes part of who we are.
            </p>
          </motion.div>

          {/* Pillar tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["Lectures", "Recitation", "Workshops", "Exhibitions", "Art", "Ilm Pathways"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.06 }}
                className="glass-card neon-border rounded-full px-4 py-1.5 text-xs text-blue-300/80 font-medium tracking-wide"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
