"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Registration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", gender: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="relative py-16 lg:py-24 bg-grid">
      {/* Glow */}
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

            {/* What's included */}
            <div className="space-y-3">
              {[
                "Access to all sessions",
                "Breakfast & Lunch included",
                "Prayer accommodations",
                "Access to recordings",
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
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">$15</span>
                <span className="text-white/30 text-sm">CAD / person</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card neon-border rounded-3xl p-8 flex flex-col gap-5"
            >
              <div className="mb-2">
                <h3 className="text-white font-bold text-xl">Registration</h3>
                <p className="text-white/40 text-sm mt-1">You'll be redirected to Stripe to complete payment</p>
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
                  className="bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm transition-colors duration-200"
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
                  className="bg-white/5 border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm transition-colors duration-200"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/50 uppercase tracking-widest">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="bg-[#0e1a2e] border border-white/10 focus:border-blue-400/50 focus:outline-none focus:ring-0 rounded-xl px-4 py-3 text-sm transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ color: form.gender ? "white" : "rgba(255,255,255,0.2)" }}
                >
                  <option value="" disabled hidden>Select gender</option>
                  <option value="male" className="text-white bg-[#0e1a2e]">Male</option>
                  <option value="female" className="text-white bg-[#0e1a2e]">Female</option>
                </select>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 relative overflow-hidden bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pay $15 — Register Now
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/20">
                Secured by Stripe · Your data is protected
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
