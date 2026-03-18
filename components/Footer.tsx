"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Image src="/big_minaret.png" alt="Ilm Retreat" width={16} height={16}
                style={{ filter: "drop-shadow(0 0 4px rgba(74,158,255,0.6))" }} />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Ilm Retreat</div>
              <div className="text-white/30 text-xs">TMU MSA</div>
            </div>
          </div>

          <p className="text-white/20 text-xs text-center">
            © 2025 TMU Muslim Students' Association. All rights reserved.
          </p>

          <a
            href="#register"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Register →
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
