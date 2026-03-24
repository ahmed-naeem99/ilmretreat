"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid radial-glow">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-20">

        {/* Left: Typography */}
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tag */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 w-fit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-card neon-border rounded-full px-4 py-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-300">
                TMU MSA Presents
              </span>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-white glow-text">ILM</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              RETREAT
            </span>
          </motion.h1>

          {/* Theme line — English */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            <p className="text-white/70 text-base lg:text-lg font-medium">
              The Quran: An Explanation of All Things
            </p>
          </motion.div>

          {/* Theme line — Arabic */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <p
              className="text-blue-300/80 text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-arabic)", direction: "rtl" }}
            >
              تِبْيَانًا لِكُلِّ شَيْءٍ
            </p>
          </motion.div>

          {/* Event meta */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <div className="glass-card neon-border rounded-xl px-5 py-3 flex items-center gap-3">
              <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-white/80 font-medium">May 2nd, 2025</span>
            </div>
            <div className="glass-card neon-border rounded-xl px-5 py-3 flex items-center gap-3">
              <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-white/80">Toronto Metropolitan University</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href="#register"
              className="group relative overflow-hidden bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 text-sm tracking-wide"
            >
              <span>Register Now — $15</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#info"
              className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-2"
            >
              Learn more
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Floating Minaret */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 h-[55vh] lg:h-screen">
          {/* Glow behind minaret */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          </div>

          {/* Floating minaret */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/big_minaret.png"
              alt="Minaret"
              width={560}
              height={820}
              className="w-[300px] lg:w-[440px] xl:w-[520px] object-contain"
              style={{ filter: "drop-shadow(0 0 80px rgba(74,158,255,0.5)) drop-shadow(0 0 30px rgba(74,158,255,0.25))" }}
              priority
            />
          </motion.div>

          {/* Orbit rings */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[320px] lg:w-[480px] h-[320px] lg:h-[480px] rounded-full border border-blue-400/10" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full border border-blue-400/5" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs text-white/30 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
