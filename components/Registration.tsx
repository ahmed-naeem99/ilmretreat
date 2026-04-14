"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const SQUARE_URL = process.env.NEXT_PUBLIC_SQUARE_PAYMENT_URL ?? "#";

export default function Registration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", gender: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.gender) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="relative py-16 lg:py-24 bg-grid">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-blue-400/50" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Join Us</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Secure Your <span className="text-blue-400">Seat</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-md">
              Spaces are limited. Register now for a full day of knowledge, reflection, and community.
            </p>

            <div className="space-y-3">
              {[
                "Access to all sessions",
                "Breakfast, Lunch & Dinner included",
                "Prayer accommodations",
                "Access to luminary scholars",
                "Islamic programs & seminaries",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-5xl font-black text-white">$15</span>
                <span className="text-white/30 text-sm">CAD / person</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-medium tracking-wide">Early Bird</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form or success */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card neon-border rounded-3xl p-8 flex flex-col gap-5"
                >
                  <div className="mb-2">
                    <h3 className="text-white font-bold text-xl">Register</h3>
                    <p className="text-white/40 text-sm mt-1">Step 1 of 2 — fill in your details</p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm transition-colors duration-200"
                    />
                  </div>

                  {/* Gender */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-widest">Gender</label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="bg-[#0e1a2e] border border-white/10 focus:border-blue-400/50 focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors duration-200 appearance-none cursor-pointer"
                      style={{ color: form.gender ? "white" : "rgba(255,255,255,0.2)" }}
                    >
                      <option value="" disabled hidden>Select gender</option>
                      <option value="male" className="text-white bg-[#0e1a2e]">Male</option>
                      <option value="female" className="text-white bg-[#0e1a2e]">Female</option>
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Saving...
                      </>
                    ) : (
                      "Register →"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card neon-border rounded-3xl p-8 flex flex-col items-center text-center gap-6"
                >
                  {/* Check icon */}
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">You're in, {form.name.split(" ")[0]}!</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                      Your spot is reserved. Complete your <span className="text-white/80 font-medium">$15 payment</span> below to confirm your registration.
                    </p>
                  </div>

                  {/* Step 2: pay */}
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-xs text-white/30 uppercase tracking-widest">Step 2 of 2</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <a
                      href={SQUARE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      Complete Payment — $15
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-white/20 text-xs mt-3">Opens in a new tab</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
