"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const speakers = [
  {
    name: "Shaykh Adil Mannan",
    specialty: "Fiqh & Quranic Sciences",
    initials: "AM",
    photo: "/speakers/adil-mannan.jpg",
    bio: "A graduate of the Islamic University of Madinah in Shariah with a specialization in Fiqh and Usool al-Fiqh, Shaykh Adil holds an Ijazah in Hafs 'an 'Asim and received an Ijazah Aammah through the scholarly circle of Shaykh Dr. Mustafa Makhdoom. He has served Muslim communities across Toronto for over a decade, including Abu Huraira Center and Masjid Omar bin al-Khattab, through youth mentorship, family counseling, and Qur'anic education.",
  },
  {
    name: "Shaykh Ammar Jakda",
    specialty: "Hadith Sciences",
    initials: "AJ",
    photo: "/speakers/ammar-jakda.jpg",
    bio: "Raised in Cambridge, Ontario, Shaykh Ammar completed his 'alim studies at Nadwatul Ulama in Lucknow, India, before specializing in Islamic theology and logic in Istanbul. He teaches Hadith sciences at Al Khalil Academy in Toronto and at the Wijhah Initiative.",
  },
  {
    name: "Dr. Ali Al-Halawani",
    specialty: "Quranic Sciences",
    initials: "AH",
    photo: "/speakers/ali-halawani.jpg",
    bio: "A PhD scholar from Al-Azhar and educator across three continents, Dr. Ali is known for making Qur'anic understanding relevant and accessible in today's world.",
  },
  {
    name: "Dr. Amjad Qourshah",
    specialty: "Tafseer & 'Aqidah",
    initials: "AQ",
    photo: "/speakers/amjad-qourshah.jpg",
    bio: "A professor of Sharia at the University of Jordan, Dr. Amjad brings over 35 years of experience in Tafseer, 'Aqidah, and real-life guidance through teaching and counseling.",
  },
  {
    name: "Shaykh Muhammad Zahid Abu Ghudda",
    specialty: "Fiqh & Hadith",
    initials: "MZ",
    photo: "/speakers/muhammad-zahid.jpg",
    bio: "A trusted scholar and community leader, Shaykh Muhammad Zahid Abu Ghudda delivers practical and inspiring teachings on Fiqh, Hadith, and character.",
  },
  {
    name: "Dr. Abdalla Idris Ali",
    specialty: "Tafsir",
    initials: "AI",
    photo: "/speakers/abdalla-idris.jpg",
    bio: "Holding a PhD from the University of Toronto, Dr. Abdalla Idris Ali founded the first full-time Islamic school in Canada in 1982 and served two terms as President of ISNA. He currently serves as Executive Director of ISNA Canada, where he holds regular Tafseer classes.",
  },
  {
    name: "Ustadh Syed Hassan",
    specialty: "Islamic Studies",
    initials: "SH",
    photo: "/speakers/syed-hassan.jpg",
    bio: "A scholar and educator based in Toronto, Ustadh Syed Hassan is known for his thoughtful approach to Islamic studies and his work in community education and youth development across the GTA.",
  },
];

function SpeakerAvatar({
  photo,
  initials,
  size = "md",
}: {
  photo: string;
  initials: string;
  size?: "lg" | "md";
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const cls =
    size === "lg"
      ? "w-24 h-24 rounded-2xl"
      : "w-14 h-14 rounded-xl";

  if (!imgFailed) {
    return (
      <div className={`${cls} overflow-hidden bg-gradient-to-br from-purple-500/30 to-purple-800/20 border border-purple-400/30 shrink-0`}>
        <img
          src={photo}
          alt={initials}
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${cls} bg-gradient-to-br from-purple-500/30 to-purple-800/20 border border-purple-400/30 flex items-center justify-center shrink-0`}
    >
      <span className={`font-black text-purple-300 ${size === "lg" ? "text-2xl" : "text-lg"}`}>
        {initials}
      </span>
    </div>
  );
}

export default function Speakers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [featured, ...rest] = speakers;

  return (
    <section className="relative py-16 lg:py-24 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

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
          <SpeakerAvatar photo={featured.photo} initials={featured.initials} size="lg" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full font-medium tracking-wide">
                Featured Speaker
              </span>
              <span className="text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">{featured.specialty}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{featured.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{featured.bio}</p>
          </div>
        </motion.div>

        {/* Remaining speakers grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {rest.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card neon-border rounded-2xl p-6 flex flex-col gap-4 group hover:border-blue-400/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <SpeakerAvatar photo={speaker.photo} initials={speaker.initials} size="md" />
                <div>
                  <h3 className="text-white font-bold text-base leading-snug">{speaker.name}</h3>
                  <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full mt-1 inline-block">{speaker.specialty}</span>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed line-clamp-4">{speaker.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
