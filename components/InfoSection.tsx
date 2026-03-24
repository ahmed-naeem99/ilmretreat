"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "10:00 – 10:45", title: "Breakfast", icon: "🥐", desc: "Drinks, croissants — settle in and connect", type: "break" },
  { time: "11:00 – 12:20", title: "Session 1", icon: "📖", desc: "Keynote speakers — lecture + Q&A", type: "session" },
  { time: "12:40 – 2:00", title: "Session 2", icon: "🎙️", desc: "Keynote speakers — lecture + Q&A", type: "session" },
  { time: "2:00 – 3:30", title: "Dhuhr + Lunch", icon: "🕌", desc: "Prayer, vendors & exhibition", type: "prayer" },
  { time: "3:30 – 4:45", title: "Parallel Sessions", icon: "⚡", desc: "Interactive discussion — two tracks running simultaneously", type: "parallel" },
  { time: "5:00 – 6:00", title: "Panel Discussion", icon: "💡", desc: "Session 3 — panel with speakers", type: "session" },
  { time: "6:00 – 6:30", title: "Asr Prayer", icon: "🌤️", desc: "Congregational Asr", type: "prayer" },
  { time: "6:30 – 7:15", title: "Closing Ceremony", icon: "📿", desc: "Quran recitation, closing remarks & trivia", type: "session" },
  { time: "7:15+", title: "Dinner + Maghrib", icon: "🌙", desc: "Evening meal and Maghrib prayer to close the day", type: "prayer" },
];

const typeColors: Record<string, string> = {
  session: "text-blue-400",
  break: "text-amber-400/80",
  prayer: "text-emerald-400/80",
  parallel: "text-purple-400/80",
};

const typeBg: Record<string, string> = {
  session: "bg-blue-500/10 border-blue-400/20",
  break: "bg-amber-500/10 border-amber-400/20",
  prayer: "bg-emerald-500/10 border-emerald-400/20",
  parallel: "bg-purple-500/10 border-purple-400/20",
};

const stats = [
  { label: "Full Day", value: "9h+" },
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
    <section id="info" className="relative py-16 lg:py-24 bg-grid">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-400/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Event Details</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            The <span className="text-blue-400">Day</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mb-16">
            May 3rd, 2026 · 10:30AM – 9PM — A full-day immersive experience designed to reconnect you with the Qur'an through knowledge, reflection, and community.
          </p>
        </FadeUp>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="glass-card neon-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Legend */}
        <FadeUp>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Session", type: "session" },
              { label: "Break / Food", type: "break" },
              { label: "Prayer", type: "prayer" },
              { label: "Parallel Tracks", type: "parallel" },
            ].map(({ label, type }) => (
              <div key={type} className={`flex items-center gap-2 rounded-full px-3 py-1 border text-xs ${typeBg[type]} ${typeColors[type]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {label}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Schedule */}
        <FadeUp>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sm">
              📅
            </span>
            Schedule — May 3rd
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
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 sm:gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-sm z-10 backdrop-blur-sm ${typeBg[item.type]}`}>
                  {item.icon}
                </div>

                <div className="flex-1 glass-card neon-border rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className={`font-mono text-sm font-medium w-28 shrink-0 ${typeColors[item.type]}`}>{item.time}</span>
                  <div className="flex-1">
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                    {item.type === "parallel" && (
                      <span className="ml-2 text-xs bg-purple-500/15 border border-purple-400/20 text-purple-300 px-2 py-0.5 rounded-full">2 tracks</span>
                    )}
                    <span className="text-white/40 text-xs ml-3 hidden sm:inline">{item.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location + Food row */}
        <FadeUp delay={0.2}>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Location */}
            <div className="glass-card neon-border rounded-3xl p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-400 tracking-widest uppercase mb-1">Venue</div>
                <div className="text-white font-bold text-lg leading-snug">Sears Atrium</div>
                <div className="text-white/60 text-sm mt-0.5 font-medium">George Vari Engineering and Computing Centre</div>
                <div className="text-white/40 text-xs mt-1">245 Church St, Toronto, ON M5B 2R2</div>
                <div className="text-white/40 text-xs mt-0.5">10:30 AM – 9:00 PM</div>
              </div>
            </div>

            {/* Food */}
            <div className="glass-card neon-border rounded-3xl p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-xl">
                🍽️
              </div>
              <div>
                <div className="text-xs text-amber-400/80 tracking-widest uppercase mb-1">Food & Refreshments</div>
                <div className="text-white font-bold text-lg mb-2">All-Inclusive</div>
                <div className="flex flex-wrap gap-2">
                  {["Breakfast", "Lunch", "Dinner", "Refreshments"].map((item) => (
                    <span key={item} className="text-xs bg-amber-500/10 border border-amber-400/20 text-amber-300/80 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
