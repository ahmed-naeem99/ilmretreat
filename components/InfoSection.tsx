"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "9:00 AM", title: "Registration & Breakfast", icon: "☀️", desc: "Check in, grab a bite, connect with attendees" },
  { time: "10:00 AM", title: "Opening Remarks", icon: "🎙️", desc: "Welcome address from TMU MSA executives" },
  { time: "11:00 AM", title: "Session 1", icon: "📖", desc: "Keynote lecture by our featured sheikh" },
  { time: "12:30 PM", title: "Dhuhr Prayer & Lunch", icon: "🕌", desc: "Congregational prayer followed by lunch" },
  { time: "2:00 PM", title: "Session 2", icon: "💡", desc: "Panel discussion and Q&A" },
  { time: "3:30 PM", title: "Asr Prayer & Break", icon: "🌤️", desc: "Prayer break and refreshments" },
  { time: "4:00 PM", title: "Session 3", icon: "🌙", desc: "Evening lecture and reflections" },
  { time: "5:30 PM", title: "Closing & Maghrib", icon: "🌅", desc: "Closing remarks, du'a, and Maghrib prayer" },
];

const stats = [
  { label: "Full Day", value: "8h+" },
  { label: "Speakers", value: "5" },
  { label: "Attendees Expected", value: "200+" },
  { label: "Admission", value: "$15" },
];

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

export default function InfoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="info" className="relative py-32 bg-grid">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-400/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Event Details</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            The <span className="text-blue-400">Day</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mb-16">
            A full-day immersive experience designed to strengthen your connection with knowledge, community, and faith.
          </p>
        </FadeUp>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="glass-card neon-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Schedule */}
        <FadeUp>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sm">
              📅
            </span>
            Schedule
          </h3>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/40 via-blue-400/20 to-transparent hidden sm:block" />

          <div className="space-y-3" ref={ref}>
            {schedule.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 sm:gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className="shrink-0 w-10 h-10 rounded-full glass-card neon-border flex items-center justify-center text-sm z-10">
                  {item.icon}
                </div>

                <div className="flex-1 glass-card neon-border rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-blue-400 font-mono text-sm font-medium w-20 shrink-0">{item.time}</span>
                  <div className="flex-1">
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                    <span className="text-white/40 text-xs ml-3 hidden sm:inline">{item.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location */}
        <FadeUp delay={0.2}>
          <div className="mt-16 glass-card neon-border rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-blue-400 tracking-widest uppercase mb-1">Location</div>
              <div className="text-white font-bold text-xl">Toronto Metropolitan University</div>
              <div className="text-white/50 text-sm mt-1">350 Victoria St, Toronto, ON — Venue TBA</div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
