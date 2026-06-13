'use client'

import {
  Tooltip,
  Button,
  useDisclosure,
} from "@heroui/react";
import ContactComponent from "@/components/ContactComponent";
import BentoCardComponent from "@/components/BentoCardComponent";
import SpotlightCard from "@/components/SpotlightCard";
import HorizontalExperienceCarousel from "@/components/HorizontalExperienceCarousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiBriefcase, FiAward, FiBook } from "react-icons/fi";
import { SiNodedotjs, SiExpress, SiTypescript, SiNestjs, SiDocker, SiLaravel, SiPython, SiVuedotjs, SiReact, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { dataAboutMe, dataDescriptions, dataEducations, dataExperiences, dataShowcase } from "@/constants/data";

const StatusWork = () => {
  return (
    <div className="flex bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 w-fit py-2 px-4 backdrop-blur-md rounded-full gap-3 items-center text-sm shadow-sm">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p className="font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide">
        Available for freelance or part-time jobs
      </p>
    </div>
  )
}

const techStack = [
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933] text-lg" /> },
  { name: "Express", icon: <SiExpress className="text-black dark:text-white text-lg" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-lg" /> },
  { name: "NestJS", icon: <SiNestjs className="text-[#E0234E] text-lg" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED] text-lg" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20] text-lg" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB] text-lg" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D] text-lg" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB] text-lg" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-lg" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-lg" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-lg" /> },
];

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="w-full h-screen justify-center items-center flex sm:max-w-screen-lg sm:mx-auto gap-6 px-6 dark:bg-blend-overlay bg-[url('/img/bg-pattern1.png')] dark:bg-[url('/img/bg-pattern.png')] bg-cover bg-center relative">
        <main className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 sm:w-full">
          <div className="md:w-[60%] flex flex-col gap-6 items-center md:items-start text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatusWork />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight text-neutral-900 dark:text-white"
            >
              Hi, I am <br className="hidden md:block" /> Nur {" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">
                  Aria
                </span>
              </span>
              {" "} Hibnastiar, <br />
              <span className="text-3xl md:text-5xl text-neutral-600 dark:text-neutral-400 mt-3 block font-semibold">
                Backend Developer
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-lg"
            >
              {dataAboutMe.short_bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                onPress={onOpen} 
                className="mt-2 py-6 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition-all font-bold text-lg"
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-fit flex justify-center md:justify-end z-10"
          >
            <Tooltip
              showArrow
              classNames={{
                base: ["before:bg-neutral-900"],
                content: ["py-2 px-4 shadow-xl", "text-white font-bold bg-neutral-900"],
              }}
              content="Nur Aria Hibnastiar">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Image 
                  src={dataAboutMe.url_img} 
                  width={1000} 
                  height={1000} 
                  alt="photos-profile" 
                  className="relative w-[240px] h-[240px] md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl" 
                />
              </div>
            </Tooltip>
          </motion.div>
        </main >
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 animate-bounce"
        >
          <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
          <FiArrowDown className="text-xl" />
        </motion.div>
      </div >

      {/* About Me Section (Bento Grid) */}
      <section className="sm:max-w-screen-lg sm:mx-auto mb-24 px-6 xl:px-0 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-neutral-900 dark:text-white">About Me</h2>
          <Button 
            as="a" 
            href={dataAboutMe.resumeUrl}
            target="_blank"
            className="mt-6 md:mt-0 bg-pink-500 text-white font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all"
            startContent={<FiDownload className="text-lg" />}
          >
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio Box */}
          <SpotlightCard className="md:col-span-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-neutral-900 dark:text-white">
                <span className="p-3 bg-pink-100 dark:bg-pink-500/20 text-pink-500 rounded-2xl"><FiBriefcase /></span> 
                Executive Summary
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg font-medium">
                {dataDescriptions}
              </p>
            </div>
          </SpotlightCard>

          {/* Tech Stack Box */}
          <SpotlightCard className="md:col-span-1">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-neutral-900 dark:text-white">
                <span className="p-3 bg-pink-100 dark:bg-pink-500/20 text-pink-500 rounded-2xl"><FiAward /></span> 
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span key={tech.name} className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-4 py-2 rounded-xl text-sm font-bold text-neutral-700 dark:text-neutral-300 hover:-translate-y-1 transition-transform cursor-default">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Horizontal Scroll Experience Section */}
      <HorizontalExperienceCarousel experiences={dataExperiences} />

      {/* Showcase Section */}
      <section className="sm:max-w-screen-lg sm:mx-auto mb-32 px-6 xl:px-0">
        <div className="flex flex-col mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-neutral-900 dark:text-white">Showcase</h2>
          <p className="text-neutral-500 mt-3 text-center md:text-left text-lg font-medium">Featured projects I have built.</p>
        </div>
        <BentoCardComponent data={dataShowcase} />
      </section>

      {/* Modal Contact Component */}
      <ContactComponent isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

export default Page