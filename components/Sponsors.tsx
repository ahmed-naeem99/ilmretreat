"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const sponsors = [
  {
    name: "Illuminating Lights",
    src: "/illuminating_lights_sponsor.jpg",
    wide: true,
  },
  {
    name: "Gestalt Communications",
    src: "/gestalt_comms_sponsor.jpg",
    wide: false,
  },
];

const caterers = [
  { name: "Olive Branch", src: "/olive_branch.png" },
  { name: "Simba's Hot Chicken", src: "/simbas_hot_chicken.png" },
  { name: "Monasaba", src: "/monasaba.png" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-12 lg:py-20 bg-grid">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Presented by TMU MSA */}
        <FadeUp>
          <div className="text-center mb-20">
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-px w-12 bg-blue-400/50" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Presented by</span>
              <div className="h-px w-12 bg-blue-400/50" />
            </div>

            <div className="inline-flex items-center gap-4 glass-card neon-border rounded-2xl px-8 py-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/dark_msa.png"
                  alt="TMU MSA"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">TMU MSA</div>
                <div className="text-white/40 text-xs">Toronto Metropolitan University Muslim Students&apos; Association</div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Sponsors */}
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">Sponsors</span>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-5 mb-14">
            {sponsors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card neon-border rounded-2xl p-5 flex flex-col items-center gap-4"
              >
                <div className="bg-white rounded-xl overflow-hidden flex items-center justify-center p-4"
                  style={s.wide ? { width: 280, height: 90 } : { width: 110, height: 110 }}
                >
                  <Image
                    src={s.src}
                    alt={s.name}
                    width={s.wide ? 260 : 90}
                    height={s.wide ? 70 : 90}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-white/60 text-sm font-medium text-center">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.06] mb-14" />

        {/* Caterers */}
        <FadeUp delay={0.15}>
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">Caterers</span>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-5">
            {caterers.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card neon-border rounded-2xl p-5 flex flex-col items-center gap-4"
              >
                <div className="rounded-xl overflow-hidden" style={{ width: 110, height: 110 }}>
                  <Image
                    src={c.src}
                    alt={c.name}
                    width={110}
                    height={110}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-white/60 text-sm font-medium text-center">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
