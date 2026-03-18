"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const speakers = [
  {
    name: "Sheikh Abdullah Al-Farooqi",
    talk: "The Purpose of Knowledge",
    bio: "A renowned scholar with over two decades of teaching experience in Islamic jurisprudence and Quranic sciences. Studied at Al-Azhar University and has taught across North America and the Middle East.",
    specialty: "Fiqh & Quranic Sciences",
    initials: "AF",
  },
  {
    name: "Sheikh Ibrahim Hassan",
    talk: "Reviving the Spirit of Learning",
    bio: "Graduate of Madinah University, Sheikh Ibrahim is known for his accessible approach to Islamic scholarship. He has mentored hundreds of students across Canada through his online and in-person programs.",
    specialty: "Islamic Education",
    initials: "IH",
  },
  {
    name: "Sheikh Yusuf Al-Qasim",
    talk: "Faith in the Modern Age",
    bio: "A contemporary Islamic thinker and author who bridges classical scholarship with the challenges facing Muslims in the West. His work on navigating modernity through Islamic principles has reached global audiences.",
    specialty: "Contemporary Issues",
    initials: "YQ",
  },
  {
    name: "Ustadha Maryam Ali",
    talk: "The Role of Women in Islamic Scholarship",
    bio: "One of the leading female Islamic scholars in North America. Ustadha Maryam holds an ijaza in hadith sciences and is the founder of a renowned Islamic learning institute for women.",
    specialty: "Hadith Sciences",
    initials: "MA",
  },
  {
    name: "Sheikh Omar Al-Rashid",
    talk: "Building Communities Through Knowledge",
    bio: "A community builder and Islamic scholar dedicated to the revival of learning in diaspora Muslim communities. Sheikh Omar has been instrumental in establishing Islamic educational programs across Ontario.",
    specialty: "Community Development",
    initials: "OR",
  },
];

export default function Speakers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-blue-400/50" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">Lineup</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            The <span className="text-blue-400">Speakers</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mb-16">
            World-class scholars bringing wisdom, clarity, and inspiration to our community.
          </p>
        </motion.div>

        {/* Featured speaker (first one) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card neon-border rounded-3xl p-8 lg:p-10 mb-6 flex flex-col lg:flex-row gap-8 items-start"
        >
          {/* Avatar */}
          <div className="shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-800/20 border border-blue-400/30 flex items-center justify-center">
            <span className="text-2xl font-black text-blue-300">{speakers[0].initials}</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full font-medium tracking-wide">
                Featured Speaker
              </span>
              <span className="text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">{speakers[0].specialty}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{speakers[0].name}</h3>
            <p className="text-blue-300 font-medium mb-4 text-sm">"{speakers[0].talk}"</p>
            <p className="text-white/50 text-sm leading-relaxed">{speakers[0].bio}</p>
          </div>
        </motion.div>

        {/* Remaining speakers grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {speakers.slice(1).map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card neon-border rounded-2xl p-6 flex flex-col gap-4 group hover:border-blue-400/30 transition-colors duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-800/10 border border-blue-400/20 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                <span className="text-lg font-black text-blue-400">{speaker.initials}</span>
              </div>

              <div>
                <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{speaker.specialty}</span>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-1">{speaker.name}</h3>
                <p className="text-blue-300/80 text-xs font-medium mb-3">"{speaker.talk}"</p>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
