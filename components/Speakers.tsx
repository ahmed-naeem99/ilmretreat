"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";

const speakers = [
  {
    name: "Shaykh Ammar Jakda",
    specialty: "Quran Sciences & Theology",
    initials: "AJ",
    photo: "/speakers/ammar-jakda.jpg",
    bio: "Shaykh Ammar Jakda, born and raised in Cambridge, ON, memorized the Qur'an in Gujarat, India, before studying at Jamiatul Ilm Wal Huda (UK) and graduating as an 'alim from Nadwatul Ulama in Lucknow, India. He later specialized in Islamic theology and logic in Istanbul, Türkiye. Formerly an instructor at Al Khalil Academy in Toronto, he currently teaches at Tamhid Institute and Wijhah Initiative.",
  },
  {
    name: "Shaykh Adil Mannan",
    specialty: "Fiqh & Quranic Sciences",
    initials: "AM",
    photo: "/speakers/adil-mannan.jpg",
    bio: "A graduate of the Islamic University of Madinah in Shariah with a specialization in Fiqh and Usool al-Fiqh, Shaykh Adil holds an Ijazah in Hafs 'an 'Asim and received an Ijazah Aammah through the scholarly circle of Shaykh Dr. Mustafa Makhdoom. He has served Muslim communities across Toronto for over a decade, including Abu Huraira Center and Masjid Omar bin al-Khattab, through youth mentorship, family counselling, and Qur'anic education.",
  },
  {
    name: "Dr. Amjad Qourshah",
    specialty: "Tafseer & Comparative Religion",
    initials: "AQ",
    photo: "/speakers/amjad-qourshah.jpg",
    bio: "Dr. Amjad Qourshah is a renowned Islamic speaker and lecturer born in Jordan in 1967. He holds a Bachelor's in Fundamentals of Jurisprudence and a Master's in Tafseer from the University of Jordan, along with a PhD in Comparative Religious Studies from the University of Birmingham. Fluent in Arabic and English, his accessible approach has drawn wide audiences across over 200 cities worldwide. He currently serves as Resident Scholar at Dar Foundation in Oakville, Ontario.",
  },
  {
    name: "Dr. Ali Al-Halawani",
    specialty: "Quranic Linguistics",
    initials: "AH",
    photo: "/speakers/ali-halawani.jpg",
    bio: "Dr. Ali Al-Halawani is an educator and linguist with over two decades of experience across Egypt, Malaysia, and Canada. He currently serves as Content Production Manager at the Muslim Association of Canada (MAC) and holds a PhD in English Linguistics and Translation Studies from Al-Azhar University, specializing in Qur'anic collocations, semantics, and religious translation. He has authored three books and translated sixteen, bridging traditional Islamic knowledge with modern linguistic methodologies.",
  },
  {
    name: "Shaykh Muhammad Zahid Abu Ghudda",
    specialty: "Fiqh, Hadith & Akhlaq",
    initials: "MZ",
    photo: "/speakers/muhammad-zahid.jpg",
    bio: "Shaykh Mohammad Zahid Abu Ghudda is the eldest son of the late Shaykh 'Abd al-Fattāḥ Abu Ghudda, widely recognized as one of the leading Muslim scholars of the 20th century, under whom he studied the Islamic sciences extensively. His lectures span Fiqh, Ḥadith, Akhlaq, Ulum al-Qur'an, and History. He is a frequent khateeb across the GTA, has authored and translated several books in Arabic and English, holds an MBA from the University of Toronto, and has resided in Canada since 1991.",
  },
  {
    name: "Ustadh Syed Hassan",
    specialty: "Exegesis & Hanafi Fiqh",
    initials: "SH",
    photo: "/speakers/syed-hassan.jpg",
    bio: "Ustadh Syed Hassan was raised in Toronto and studied Theoretical Mathematics at the University of Waterloo before pursuing traditional Islamic studies. He studied at Cambridge Islamic College under Shaykh Muhammad Akram Nadwi, specializing in exegesis and Hanafi fiqh. He currently serves as Curriculum Lead and Vice-Principal at AlHuda Secondary School and has served the GTA community through khutbahs and seminars since 2012.",
  },
  {
    name: "Dr. Abdalla Idris Ali",
    specialty: "Tafsir & Islamic Education",
    initials: "AI",
    photo: "/speakers/abdalla-idris.jpg",
    bio: "Dr. Abdalla Idris Ali is a pioneering Muslim community leader, Imam, and public speaker who has made tremendous contributions to Islamic education and community cohesion across North America. He holds a PhD in International Relations from the University of Toronto and studied the Islamic sciences in his native Sudan, specializing in Tafsīr, Sharīʿah, and counselling. He founded the first full-time Islamic school in North America, serving as its principal for seventeen years, and currently serves as Senior Community and Religious Advisor at ISNA Canada.",
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
  const featuredIdx = useMemo(() => Math.floor(Math.random() * speakers.length), []);
  const featured = speakers[featuredIdx];
  const rest = speakers.filter((_, i) => i !== featuredIdx);

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
