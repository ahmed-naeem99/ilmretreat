"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sponsors = [
  { name: "Sponsor One", placeholder: "S1" },
  { name: "Sponsor Two", placeholder: "S2" },
  { name: "Sponsor Three", placeholder: "S3" },
  { name: "Sponsor Four", placeholder: "S4" },
  { name: "Sponsor Five", placeholder: "S5" },
];

export default function Sponsors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-grid">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* TMU Logo + Presented by */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-px w-12 bg-blue-400/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Presented by</span>
            <div className="h-px w-12 bg-blue-400/50" />
          </div>

          <div className="inline-flex items-center gap-4 glass-card neon-border rounded-2xl px-8 py-5">
            {/* TMU Logo placeholder — replace src with actual TMU logo */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-900/20 border border-blue-400/30 flex items-center justify-center">
              <span className="text-blue-300 font-black text-sm">TMU</span>
            </div>
            <div className="text-left">
              <div className="text-white font-bold">TMU MSA</div>
              <div className="text-white/40 text-xs">Toronto Metropolitan University Muslim Students' Association</div>
            </div>
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center gap-4 justify-center mb-2">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/30">Our Sponsors</span>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </motion.div>

        <div ref={ref} className="flex flex-wrap justify-center items-center gap-4">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card neon-border rounded-xl px-8 py-5 flex items-center gap-3 hover:border-blue-400/30 transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-400/20 flex items-center justify-center transition-colors">
                <span className="text-xs font-bold text-white/40 group-hover:text-blue-300 transition-colors">{sponsor.placeholder}</span>
              </div>
              <span className="text-white/40 group-hover:text-white/60 text-sm font-medium transition-colors">{sponsor.name}</span>
            </motion.div>
          ))}

          {/* Become a sponsor CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-xl px-8 py-5 flex items-center gap-3 border border-dashed border-white/10 hover:border-blue-400/30 transition-colors duration-300 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg border border-dashed border-white/10 group-hover:border-blue-400/30 flex items-center justify-center transition-colors">
              <span className="text-white/30 group-hover:text-blue-400 text-lg leading-none transition-colors">+</span>
            </div>
            <span className="text-white/30 group-hover:text-white/50 text-sm font-medium transition-colors">Become a Sponsor</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
