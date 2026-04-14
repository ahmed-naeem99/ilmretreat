"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ScheduleItem = {
  time: string;
  title: string;
  icon: string;
  desc: string;
  type: string;
  speakers?: string[];
  tracks?: { title: string; speakers: string[] }[];
};

const schedule: ScheduleItem[] = [
  {
    time: "10:00 – 10:30 AM",
    title: "Doors Open + Breakfast",
    icon: "🌅",
    desc: "Registration and morning breakfast",
    type: "break",
  },
  {
    time: "10:30 – 10:40 AM",
    title: "Opening Remarks",
    icon: "🎙️",
    desc: "",
    type: "session",
  },
  {
    time: "11:00 AM – 12:20 PM",
    title: "Preservation & Qira'at",
    icon: "📖",
    desc: "",
    type: "session",
  },
  {
    time: "12:40 – 2:00 PM",
    title: "Intro to Tadabur & Tafsir",
    icon: "📖",
    desc: "",
    type: "session",
  },
  {
    time: "2:30 – 3:30 PM",
    title: "Dhuhr + Lunch",
    icon: "🕌",
    desc: "Congregational Dhuhr prayer, vendors & exhibition",
    type: "prayer",
  },
  {
    time: "3:30 – 4:30 PM",
    title: "Parallel Session 1",
    icon: "⚡",
    desc: "Two simultaneous tracks",
    type: "parallel",
    tracks: [
      { title: "The Eternal Challenge", speakers: [] },
      { title: "Seerah as Told by the Quran", speakers: [] },
    ],
  },
  {
    time: "4:45 – 5:45 PM",
    title: "Parallel Session 2",
    icon: "⚡",
    desc: "Two simultaneous tracks",
    type: "parallel",
    tracks: [
      { title: "Towards Quranic Civilization", speakers: [] },
      { title: "Khuluq al-Quran", speakers: [] },
    ],
  },
  {
    time: "5:45 – 6:15 PM",
    title: "Asr + Refreshments",
    icon: "🌤️",
    desc: "Congregational Asr prayer and refreshments",
    type: "prayer",
  },
  {
    time: "6:15 – 6:30 PM",
    title: "Qira'at",
    icon: "📿",
    desc: "Recitation",
    type: "session",
  },
  {
    time: "6:30 – 7:30 PM",
    title: "Panel Discussion",
    icon: "💡",
    desc: "Closing panel",
    type: "session",
  },
  {
    time: "7:30 – 9:00 PM",
    title: "Maghrib + Dinner",
    icon: "🌙",
    desc: "Maghrib prayer and evening dinner to close the day",
    type: "prayer",
  },
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
  { label: "Full Day", value: "11h+" },
  { label: "Speakers", value: "7" },
  { label: "Attendees Expected", value: "200+" },
  { label: "Ticket Price", value: "$15" },
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
            May 3rd, 2026 · 10:00AM – 9PM — A full-day immersive experience designed to reconnect you with the Qur'an through knowledge, reflection, and community.
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

        <div ref={ref} className="overflow-x-auto -mx-2 px-2">
          <div className="min-w-[540px]">

            {/* Track column headers */}
            <div className="grid grid-cols-[92px_1fr_1fr] gap-x-2 mb-2">
              <div />
              <div className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/20 pb-1.5 border-b border-white/5">Track A</div>
              <div className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/20 pb-1.5 border-b border-white/5">Track B</div>
            </div>

            <div className="space-y-1.5">
              {schedule.map((item, i) => {
                const [start, end] = item.time.split(" – ");
                return (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-[92px_1fr_1fr] gap-x-2 items-stretch"
                  >
                    {/* Time label */}
                    <div className="flex flex-col justify-center items-end pr-3 py-1 gap-0.5">
                      <span className="font-mono text-[11px] text-white/50 leading-none">{start}</span>
                      {end && <span className="font-mono text-[10px] text-white/25 leading-none">{end}</span>}
                    </div>

                    {/* Content */}
                    {item.type === "parallel" ? (
                      <>
                        {item.tracks!.map((track, ti) => (
                          <div
                            key={ti}
                            className="rounded-xl px-4 py-3 bg-[#1e1830]/60 border border-white/[0.08] flex flex-col gap-1"
                          >
                            <span className="text-white/85 font-semibold text-sm leading-snug">{track.title}</span>
                            {track.speakers[0] && <span className="text-white/35 text-xs">{track.speakers[0]}</span>}
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className={`col-span-2 rounded-xl px-4 py-3 border flex items-center gap-3 ${
                        item.type === "prayer"
                          ? "bg-emerald-950/40 border-emerald-400/10"
                          : item.type === "break"
                          ? "bg-white/[0.02] border-white/[0.06]"
                          : "bg-blue-950/40 border-blue-400/10"
                      }`}>
                        <span className="text-base shrink-0 opacity-70">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <span className="text-white/85 font-semibold text-sm">{item.title}</span>
                          {item.speakers && item.speakers.length > 0 && (
                            <div className="text-white/35 text-xs mt-0.5">{item.speakers.join("  ·  ")}</div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

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
                <div className="text-white/40 text-xs mt-0.5">10:00 AM – 9:00 PM</div>
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
