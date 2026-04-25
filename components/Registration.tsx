"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const SQUARE_URL =
  process.env.NEXT_PUBLIC_SQUARE_PAYMENT_URL ?? "https://square.link/u/Hj11PSQv";

const EARLY_BIRD_TOTAL = 90;
const EARLY_BIRD_REMAINING = 30;
const CIRCLE_RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const DASH_OFFSET = CIRCUMFERENCE * (1 - EARLY_BIRD_REMAINING / EARLY_BIRD_TOTAL);

const PATHWAY1_OPTIONS = [
  {
    value: "The Eternal Challenge",
    label: "The Eternal Challenge",
    speaker: "Shaykh Adil Mannan",
  },
  {
    value: "Revelation in Real Life",
    label: "Revelation in Real Life",
    speaker: "Dr. Amjad Qourshah",
  },
];

const PATHWAY2_OPTIONS = [
  {
    value: "Towards Quranic Civilization",
    label: "Towards Quranic Civilization",
    speaker: "Dr. Ali Al-Halawani",
  },
  {
    value: "Quranic Character",
    label: "Quranic Character",
    speaker: "Shaykh Muhammad Zahid Abu Ghudda",
  },
];

function PathwayOption({
  value,
  label,
  speaker,
  selected,
  onChange,
}: {
  value: string;
  label: string;
  speaker: string;
  selected: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full text-left rounded-xl px-4 py-3 border transition-all duration-200 ${
        selected
          ? "bg-blue-500/20 border-blue-400/50 text-white"
          : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
            selected ? "border-blue-400 bg-blue-400" : "border-white/30"
          }`}
        >
          {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        <div>
          <div className="text-sm font-medium leading-snug">{label}</div>
          <div className={`text-xs mt-0.5 ${selected ? "text-blue-300/70" : "text-white/30"}`}>
            {speaker}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Registration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    pathway1: "",
    pathway2: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setPathway = (key: "pathway1" | "pathway2", value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.gender ||
      !form.pathway1 ||
      !form.pathway2
    ) {
      setError("Please fill in all fields including your pathway selections.");
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
        window.open(SQUARE_URL, "_blank");
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
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
              <div className="flex items-end gap-8 mb-1">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-black text-white">$15</span>
                    <span className="text-white/30 text-sm">CAD / person</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-3 py-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-blue-300 text-xs font-medium tracking-wide">Early Bird</span>
                  </div>
                </div>
                <div className="pb-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white/50">$20</span>
                    <span className="text-white/20 text-sm">CAD / person</span>
                  </div>
                  <div className="text-white/30 text-xs mt-1">tSeerah</div>
                </div>
              </div>

              {/* Early Bird Ticket Counter */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex items-center gap-5 border border-white/8 bg-white/[0.03] rounded-2xl px-5 py-4"
              >
                {/* Circle */}
                <div className="relative w-[88px] h-[88px] shrink-0">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle
                      cx="60" cy="60" r={CIRCLE_RADIUS}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="9"
                    />
                    <motion.circle
                      cx="60" cy="60" r={CIRCLE_RADIUS}
                      fill="none"
                      stroke="#4a9eff"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      initial={{ strokeDashoffset: CIRCUMFERENCE }}
                      animate={inView ? { strokeDashoffset: DASH_OFFSET } : {}}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white leading-none">{EARLY_BIRD_REMAINING}</span>
                    <span className="text-[9px] text-white/40 uppercase tracking-[0.15em] mt-0.5">left</span>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5">Early Bird Tickets</div>
                  <div className="text-white/40 text-xs leading-relaxed">
                    {EARLY_BIRD_REMAINING} of {EARLY_BIRD_TOTAL} spots remaining
                  </div>
                  <div className="mt-2.5 h-1 rounded-full bg-white/5 overflow-hidden w-28">
                    <motion.div
                      className="h-full rounded-full bg-blue-400"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(EARLY_BIRD_REMAINING / EARLY_BIRD_TOTAL) * 100}%` } : {}}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: form → success */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">

              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card neon-border rounded-3xl p-8 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      You&apos;re registered, {form.name.split(" ")[0]}!
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                      Your registration is saved. Complete your{" "}
                      <span className="text-white/80 font-medium">$15 payment</span> in the tab that just opened to confirm your spot for{" "}
                      <span className="text-white/80 font-medium">May 3rd</span>, inshaAllah.
                    </p>
                  </div>
                  <div className="w-full border border-white/5 rounded-xl px-4 py-4 text-left">
                    <div className="text-white/50 font-medium mb-3 text-sm">Your pathway selections:</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 text-xs font-mono shrink-0 mt-0.5">3:30 PM</span>
                        <span className="text-white/60 text-sm">{form.pathway1}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 text-xs font-mono shrink-0 mt-0.5">4:45 PM</span>
                        <span className="text-white/60 text-sm">{form.pathway2}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card neon-border rounded-3xl p-8 flex flex-col gap-5"
                >
                  <div className="mb-2">
                    <h3 className="text-white font-bold text-xl">Register</h3>
                    <p className="text-white/40 text-sm mt-1">Fill in your details — you&apos;ll be sent to payment on submit</p>
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

                  {/* Pathway 1 */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-widest">
                      Parallel Session 1 · 3:30 PM
                    </label>
                    <p className="text-white/30 text-xs -mt-1">Choose one track</p>
                    <div className="flex flex-col gap-2 mt-1">
                      {PATHWAY1_OPTIONS.map((opt) => (
                        <PathwayOption
                          key={opt.value}
                          value={opt.value}
                          label={opt.label}
                          speaker={opt.speaker}
                          selected={form.pathway1 === opt.value}
                          onChange={() => setPathway("pathway1", opt.value)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pathway 2 */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/50 uppercase tracking-widest">
                      Parallel Session 2 · 4:45 PM
                    </label>
                    <p className="text-white/30 text-xs -mt-1">Choose one track</p>
                    <div className="flex flex-col gap-2 mt-1">
                      {PATHWAY2_OPTIONS.map((opt) => (
                        <PathwayOption
                          key={opt.value}
                          value={opt.value}
                          label={opt.label}
                          speaker={opt.speaker}
                          selected={form.pathway2 === opt.value}
                          onChange={() => setPathway("pathway2", opt.value)}
                        />
                      ))}
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      {error}
                    </p>
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
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Complete Registration
                      </>
                    )}
                  </button>
                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
