'use client'
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiBook } from "react-icons/fi";

interface Experience {
  title: string;
  institution: string;
  date: string;
  duration: string;
  description: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  lang: 'en' | 'id';
}

const ExperienceTimeline = ({ experiences, lang }: ExperienceTimelineProps) => {
  return (
    <section className="sm:max-w-screen-xl sm:mx-auto mb-32 px-6 xl:px-0">
      <div className="flex flex-col mb-16">
        <h2 className="text-4xl md:text-5xl font-bold flex flex-wrap items-center gap-4 text-neutral-900 dark:text-white drop-shadow-sm mb-2">
          <span className="p-3 bg-pink-100 dark:bg-pink-500/20 text-pink-500 rounded-2xl shadow-sm"><FiBook className="text-xl md:text-3xl" /></span> 
          {lang === 'en' ? 'Recent Experience' : 'Pengalaman Kerja'}
        </h2>
        <p className="text-neutral-500 mt-2 text-lg font-medium">
          {lang === 'en' ? 'A timeline of my professional journey.' : 'Garis waktu perjalanan karir profesional saya.'}
        </p>
      </div>

      <div className="relative w-full">
        {/* The Vertical Line Base */}
        <div className="absolute left-[26px] md:left-[42px] top-[40px] bottom-[40px] w-[4px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-full z-0">
          {/* The Moving Light Effect */}
          <motion.div
            className="absolute left-0 right-0 h-[30vh] bg-gradient-to-t from-transparent via-pink-500 to-transparent"
            animate={{
              translateY: ["500%", "-100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-16 md:pl-28 z-10 group/timeline">
              {/* The Timeline Dot */}
              <motion.div 
                className="absolute left-[20px] md:left-[36px] top-[40px] w-4 h-4 rounded-full border-[3px] border-pink-500 bg-white dark:bg-neutral-900 shadow-[0_0_0_4px_rgba(236,72,153,0.1)] z-20 transition-colors duration-300 group-hover/timeline:scale-125 group-hover/timeline:bg-pink-500" 
                animate={idx === 0 ? {
                  boxShadow: [
                    "0 0 0 4px rgba(236,72,153,0.1)",
                    "0 0 0 4px rgba(236,72,153,0.1)",
                    "0 0 20px 8px rgba(236,72,153,0.6)",
                    "0 0 0 4px rgba(236,72,153,0.1)",
                    "0 0 0 4px rgba(236,72,153,0.1)",
                  ],
                  scale: [1, 1, 1.3, 1, 1],
                } : {}}
                transition={idx === 0 ? {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.75, 0.85, 0.95, 1],
                } : {}}
              />
              
              {/* Horizontal Connecting Line */}
              <div className="absolute left-[36px] md:left-[52px] top-[47px] w-[20px] md:w-[48px] h-[2px] bg-neutral-200 dark:bg-neutral-800 z-0" />

              <div className="relative w-full">
                {/* Border Glow Overlay for the first card */}
                {idx === 0 && (
                  <motion.div
                    className="absolute inset-0 rounded-[2rem] z-20 pointer-events-none border-2 border-transparent"
                    animate={{
                      borderColor: [
                        "rgba(236,72,153,0)",
                        "rgba(236,72,153,0)",
                        "rgba(236,72,153,1)",
                        "rgba(236,72,153,0)",
                        "rgba(236,72,153,0)",
                      ],
                      boxShadow: [
                        "inset 0 0 0 0 rgba(236,72,153,0), 0 0 0 0 rgba(236,72,153,0)",
                        "inset 0 0 0 0 rgba(236,72,153,0), 0 0 0 0 rgba(236,72,153,0)",
                        "inset 0 0 10px 0 rgba(236,72,153,0.3), 0 0 15px 2px rgba(236,72,153,0.5)",
                        "inset 0 0 0 0 rgba(236,72,153,0), 0 0 0 0 rgba(236,72,153,0)",
                        "inset 0 0 0 0 rgba(236,72,153,0), 0 0 0 0 rgba(236,72,153,0)",
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.75, 0.85, 0.95, 1],
                    }}
                  />
                )}
                
                <div className="relative z-10">
                  <SpotlightCard className="w-full h-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight transition-colors">{exp.title}</h4>
                        <p className="text-pink-600 dark:text-pink-400 font-bold text-base mb-3">{exp.institution}</p>
                        <p className="text-xs text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 w-fit px-3 py-1.5 rounded-full uppercase tracking-wider">{exp.date} • {exp.duration}</p>
                      </div>
                      <ul className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 space-y-2 list-disc pl-4 font-medium mt-2">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
