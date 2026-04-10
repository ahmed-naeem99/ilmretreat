"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const speakers = [
  {
    name: "Shaykh Adil Mannan",
    talk: "Intro Khatira · The Eternal Challenge",
    bio: "Graduate of the Islamic University of Madinah with specializations in Fiqh, Tafsir, and Hadith, Shaykh Adil holds an Ijazah in Hafs 'an 'Asim and is the founder of Deen Study, serving Muslim communities across the Greater Toronto Area. For over a decade he has mentored communities and championed the sacred tradition of tallaqqi — learning directly from a teacher.",
    specialty: "Quranic Education",
    initials: "AM",
  },
  {
    name: "Shaykh Ammar Jakda",
    talk: "Intro to Uloom al-Quran",
    bio: "Raised in Cambridge, Ontario, Shaykh Ammar completed his 'alim studies at Nadwatul Ulama in Lucknow, India, before specializing in Islamic theology and logic in Istanbul. He teaches Hadith sciences at Al Khalil Academy in Toronto and at the Wijhah Initiative.",
    specialty: "Hadith",
    initials: "AJ",
  },
  {
    name: "Dr. Waleed Basyouni",
    talk: "Intro to Tadabur & Tafsir",
    bio: "Holding a doctorate in Theology and trained under Shaykh Ibn Baz, Dr. Waleed Basyouni serves as President of the AlMaghrib Institute and Imam of Clear Lake Islamic Center. He is a member of the Assembly of Muslim Jurists of America (AMJA) and the North American Imams Federation.",
    specialty: "Theology",
    initials: "WB",
  },
  {
    name: "Dr. Amjad Qourshah",
    talk: "Seerah as Told by the Quran",
    bio: "Holding a PhD from the University of Birmingham and having lectured at the University of Jordan's Faculty of Shari'ah for over 15 years, Dr. Qourshah is a resident scholar at Al-Dar Foundation in Oakville, Ontario. He has delivered lectures on Islam and the Seerah in over 110 cities worldwide.",
    specialty: "Seerah",
    initials: "AQ",
  },
  {
    name: "Dr. Ali Al-Halawani",
    talk: "Towards Quranic Civilization",
    bio: "Dr. Ali Al-Halawani holds a PhD in Computational Linguistics and Translation of the Quran from Al-Azhar University and has taught at international Islamic universities in Malaysia and beyond. He has authored three books and published over 400 articles on Islam and the Quran.",
    specialty: "Quranic Sciences",
    initials: "AH",
  },
  {
    name: "Shaykh Muhammad Zahid",
    talk: "Khuluq al-Quran",
    bio: "Son of the late Shaykh 'Abd al-Fattah Abu Ghudda — one of the foremost Muslim scholars of the 20th century — Shaykh Muhammad Zahid holds an MBA from the University of Toronto and is a regular khateeb and lecturer across the GTA. He advises Canadian Muslim organizations on Islamic jurisprudence and institutional governance.",
    specialty: "Fiqh",
    initials: "MZ",
  },
  {
    name: "Shaykh Fahim Mannan",
    talk: "Session 4 — Qira'at",
    bio: "A specialist in the science of Qira'at, Shaykh Fahim Mannan is certified in multiple modes of Quranic recitation and teaches Tajweed and Quranic sciences within the Greater Toronto Area Muslim community.",
    specialty: "Qira'at",
    initials: "FM",
  },
  {
    name: "Dr. Abdalla Idris Ali",
    talk: "Panel Discussion",
    bio: "Holding a PhD from the University of Toronto, Dr. Abdalla Idris Ali founded the first full-time Islamic school in Canada in 1982 and served two terms as President of ISNA. He currently serves as Executive Director of ISNA Canada, where he holds regular Tafseer classes.",
    specialty: "Tafsir",
    initials: "AI",
  },
  {
    name: "Ustadh Samir Hussain",
    talk: "Panel Discussion",
    bio: "After studying in Riyadh and Cairo, Ustadh Samir Hussain earned ijazahs in multiple classical texts and has taught Islamic Studies full-time in Canada since 2017. His research focuses on Islamic theology, Usul al-Fiqh, and philosophy.",
    specialty: "Theology",
    initials: "SH",
  },
];

export default function Speakers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 lg:py-24 bg-grid">
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
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            The <span className="text-blue-400">Speakers</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mb-16">
            World-class scholars bringing wisdom, clarity, and inspiration to our community.
          </p>
        </motion.div>

        {/* Featured speaker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card neon-border rounded-3xl p-8 lg:p-10 mb-6 flex flex-col lg:flex-row gap-8 items-start"
        >
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
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {speakers.slice(1).map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card neon-border rounded-2xl p-6 flex flex-col gap-4 group hover:border-blue-400/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-800/10 border border-blue-400/20 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                <span className="text-lg font-black text-blue-400">{speaker.initials}</span>
              </div>

              <div>
                <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{speaker.specialty}</span>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-1">{speaker.name}</h3>
                <p className="text-blue-300/80 text-xs font-medium mb-3">"{speaker.talk}"</p>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-4">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
