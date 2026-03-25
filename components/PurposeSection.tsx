"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const bubbles: { text: string; className: string; delay: number; duration: number }[] = [
  { text: "Understand · Convey · Apply",       className: "left-0 lg:left-2 top-[4%]",    delay: 0,   duration: 6   },
  { text: "A Constitution to Live By",          className: "right-0 lg:right-2 top-[12%]", delay: 1.2, duration: 7.5 },
  { text: "Softens Hearts · Shapes Actions",    className: "left-0 lg:left-6 top-[42%]",   delay: 0.6, duration: 8   },
  { text: "Recitation & Reflection",            className: "right-0 lg:right-2 top-[46%]", delay: 2,   duration: 6.5 },
  { text: "Workshops · Exhibitions · Art",      className: "left-2 lg:left-10 bottom-[6%]",delay: 1.5, duration: 7   },
  { text: "Find Your Path Forward",             className: "right-0 lg:right-6 bottom-[4%]",delay: 0.8, duration: 9  },
];

function FloatingBubble({ text, className, delay, duration }: (typeof bubbles)[0]) {
  return (
    <motion.div
      className={`absolute ${className} z-20`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass-card neon-border rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap backdrop-blur-md"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: duration * 0.7, repeat: Infinity, ease: "easeInOut" }}
          className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0"
        />
        <span className="text-white/85 text-sm lg:text-base font-medium">{text}</span>
      </motion.div>
    </motion.div>
  );
}

export default function PurposeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070d20] to-[#050b18] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="relative flex flex-col items-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="h-px w-10 bg-blue-400/40" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">This Year's Theme</span>
            <div className="h-px w-10 bg-blue-400/40" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-2 max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Quran: An Explanation of All Things
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-blue-300/70 text-3xl lg:text-4xl mb-10 text-center"
            style={{
              fontFamily: "var(--font-arabic)",
              direction: "rtl",
              letterSpacing: "0.08em",
              wordSpacing: "0.3em",
              lineHeight: "2",
            }}
          >
            تِبْيَانًا لِكُلِّ شَيْءٍ
          </motion.p>

          {/* Quran + floating pills */}
          <div className="relative w-full flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
            {bubbles.map((b) => (
              <FloatingBubble key={b.text} {...b} />
            ))}

            {/* Glowing Quran */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
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
                  style={{ filter: "drop-shadow(0 0 60px rgba(96,166,195,0.6)) drop-shadow(0 0 30px rgba(96,166,195,0.3)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Purpose text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 max-w-2xl text-center text-white/50 text-base lg:text-lg leading-relaxed"
          >
            Returning to the Qur'an — not just as words we recite, but as a{" "}
            <span className="text-white/80 font-medium">guide to live by</span>. Through reflection, learning,
            and shared experiences, we hope to create a space where the Qur'an softens our hearts, shapes our actions,
            and becomes part of who we are.
          </motion.p>

          {/* Pillar tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
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
