"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0">
              <Image
                src="/dark_msa.png"
                alt="TMU MSA"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
                Ilm Retreat
              </div>
              <div className="text-white/30 text-xs">TMU MSA · 2026</div>
            </div>
          </div>

          <p className="text-white/20 text-xs text-center">
            © 2026 TMU Muslim Students' Association. All rights reserved.
          </p>

          <a
            href="#register"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
          >
            Register →
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
