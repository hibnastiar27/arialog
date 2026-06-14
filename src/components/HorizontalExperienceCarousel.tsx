'use client'
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiBook } from "react-icons/fi";

interface Experience {
  title: string;
  institution: string;
  date: string;
  duration: string;
  description: string[];
}

interface HorizontalExperienceCarouselProps {
  experiences: Experience[];
  lang: 'en' | 'id';
}

const HorizontalExperienceCarousel = ({ experiences, lang }: HorizontalExperienceCarouselProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [endX, setEndX] = useState("-45%");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        // Setting mobile tetap dipertahankan sesuai permintaan (-73% dari 340vw)
        setEndX("-73%"); 
      } else if (window.innerWidth < 1280) {
        // Tablet/Laptop Kecil: Total lebar komponen (1946px + 24px padding = 1970px) dikurangi lebar layar
        const shift = 1970 - window.innerWidth;
        setEndX(`-${shift}px`); 
      } else {
        // Desktop: Karena container di-lock max-w-screen-xl (1280px), 
        // pergeseran mutlak yang dibutuhkan agar pas di kanan container adalah persis -690px.
        setEndX("-690px"); 
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
        {/* Title pinned to the top-left area of the section while scrolling */}
        <div className="w-full max-w-screen-xl pl-6 sm:pl-[calc(50%-640px+24px)] z-10 mb-8 md:mb-12 pointer-events-none">
          <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-4 text-neutral-900 dark:text-white drop-shadow-sm">
            <span className="p-3 bg-pink-100 dark:bg-pink-500/20 text-pink-500 rounded-2xl shadow-sm"><FiBook className="text-xl md:text-2xl" /></span> 
            {lang === 'en' ? 'Recent Experience' : 'Pengalaman Kerja'}
          </h3>
        </div>
        
        {/* The horizontal scrolling track */}
        <motion.div style={{ x }} className="flex gap-8 pl-6 sm:pl-[calc(50%-640px+24px)] items-start">
          {experiences.map((exp, idx) => (
            <SpotlightCard key={idx} className="w-[85vw] sm:w-[450px] shrink-0 h-auto min-h-[380px]">
              <div className="p-8 md:p-10 flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-1.5 bg-pink-500 rounded-full mb-6"></div>
                  <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">{exp.title}</h4>
                  <p className="text-pink-600 dark:text-pink-400 font-bold text-base mb-3">{exp.institution}</p>
                  <p className="text-xs text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 w-fit px-3 py-1.5 rounded-full uppercase tracking-wider">{exp.date} • {exp.duration}</p>
                </div>
                <ul className="text-base text-neutral-600 dark:text-neutral-400 space-y-2 list-disc pl-4 font-medium mt-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
          {/* Spacer at the end so the last card doesn't stick directly to the right edge */}
          <div className="w-[10vw] sm:w-[50px] shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalExperienceCarousel;
