'use client'

import {
  Tooltip,
  Button,
  useDisclosure,
} from "@heroui/react";
import Tabs from "@/components/Tabs";
import ContactComponent from "@/components/ContactComponent";
import BentoCardComponent from "@/components/BentoCardComponent";
import Meteor from "@/components/Meteor";
import Image from "next/image";
import { motion } from "framer-motion";

const dataAboutMe = {
  "title": "Fullstack Developer",
  "short_bio": "Transforming ideas into code while learning and thriving in Artificial Intelligence.",
  "url_img": "/img/profile.jpg",
  "resumeUrl": "https://drive.google.com/file/d/1t08yk-cGzX79Zj-64Dj506NAOCt9Bn6B/preview"
}

const dataDeskriptions = "I am a 22-year-old fresh graduate with expertise as a full-stack website developer. I have experience working with Next.js, Express.js, MongoDB, and JWT authentication. I participated in MSIB Batch 5 Revou as a Data Analyst. My background also includes serving as a lab assistant, lab coordinator, and workshop speaker. I won 1st place in a UI Design competition and am currently working on various projects, such as a CRM system for an electronics store and a sales analysis dashboard. I am actively seeking job opportunities while deepening my knowledge of Machine Learning through the DBS Foundations Education scholarship."

const dataEducations = [
  {
    title: "S1 - Teknik Informatika",
    institution: "Institut Teknologi Nasional Malang",
    duration: "3,5 Years",
    description: ["Algoritma dan Pemrograman", "Struktur Data", "Web Programming"],
    imageUrl: "/img/B-ITN-MALANG.png"
  },
  {
    title: "MSIB 5  Data Analyst & Software Engineer",
    institution: "RevoU",
    duration: "5 Month",
    description: [
      "Data Analyst",
      "Python",
      "Exploratori Data Analyst",
    ],
    imageUrl: "/img/B-REVOU.png"
  },
  {
    title: "MSIB 6 - Website Platform Edukasi",
    institution: "Educourse",
    duration: "5 Month",
    description: [
      "Python",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Django",
      "Web Programming",
    ],
    imageUrl: "/img/B-EDU.png"
  },
]

const dataExperiences = [
  {
    title: "Frontend Developer Intern",
    institution: "PT Kawan Kerja Indonesia",
    date: "Februari 2024 - Juni 2024",
    duration: "4 Months",
    description: [
      'Contribute to the development of "Kawan Kampus", one of the projects created by PT. Kawan Kerja Indonesia.',
      'Develop and maintain user interfaces for web applications using HTML, CSS and JavaScript.',
      'Responsible for translating Figma designs into code for the "Kawan Kampus" project.',
      'Participate in webinars organized by PT. Kawan Kerja Indonesia.',
    ],
    link_sertifikat: "https://drive.google.com/file/d/1zsU_HbRbx9bSFc2Wl8BTJU3s0RFHTbZE/view?usp=sharing",
    imageUrl: "/img/B-KAWAN-KERJA.png"
  },
  {
    title: "Coordinator & Team Leader Laboratorium",
    institution: "GAMA - Game Animasi Multimedia dan Pengolahan Citra | ITN Malang",
    date: "Agustus 2023 - Agustus 2024",
    duration: "1 Years",
    description: [
      'Berkontribusi untuk mengatur dan management 25 asisten laboratorium.',
      'Berkontribusi untuk menjadi penghubung antara kepala laboratorium dan asisten laboratorium.',
      'Inisitatif untuk membuat modul online pada praktikum animasi dan game periode 2023/2024',
    ],
    link_sertifikat: "https://drive.google.com/file/d/1kb7oLNpbTJXflOFc9dhEPIC6CICHr2-G/view?usp=sharing",
    imageUrl: "/img/B-GAMA.png"
  },
  {
    title: "Instructure & Asisten Laboratorium",
    institution: "GAMA - Game Animasi Multimedia dan Pengolahan Citra | ITN Malang",
    date: "Agustus 2021 - Agustus 2024",
    duration: "3 Years",
    description: [
      'Mengajar praktikum Multimedia dan Pengolahan Citra di semester ganjil',
      'Mengajar praktikum Animasi dan Game di semester genap',
      'Berkontribusi Membuat Modul praktikum Multimedia dan pengolahan citra di semester ganjil.',
      'Berkontribusi Membuat Modul praktikum Animasi dan Game di semester genap.',
    ],
    link_sertifikat: "https://drive.google.com/file/d/1kb7oLNpbTJXflOFc9dhEPIC6CICHr2-G/view?usp=sharing",
    imageUrl: "/img/B-GAMA.png"
  },
  {
    title: "Pemateri : Trial Class Make it Mobile Games WIth Unity",
    institution: "Teknik Informatika (S-1) & GAMA Laboratorium | ITN Malang",
    date: "Mei 2024",
    duration: "3 Years",
    description: [
      'Memperkenalkan dasar-dasar Unity dan pengembangan game mobile.',
      'Membimbing peserta dalam pembuatan game sederhana menggunakan C#.',
      'Menjelaskan proses build dan deployment game ke platform mobile.',
    ],
    link_sertifikat: "https://drive.google.com/file/d/1QZedhCNlp4K9WJvQP-UNxPaGFR6xhJc9/view?usp=sharing",
    imageUrl: "/img/B-ITXGAMA.png"
  },
]

const StatusWork = () => {
  return (
    <div className="flex bg-gray-300/10 border border-gray-500 w-fit py-2 px-4 backdrop-blur-md rounded-full gap-2 items-center text-sm">
      <span className="relative mt-0.5 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-success-500"></span>
      </span>
      <p>
        Available to work
      </p>
    </div>
  )
}

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="w-full h-screen justify-center items-center flex sm:max-w-screen-lg sm:mx-auto gap-6 px-6 dark:min-h-screen dark:bg-blend-overlay bg-[url('/img/bg-pattern1.png')] dark:bg-[url('/img/bg-pattern.png')] bg-cover bg-center">
        <main className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4 sm:w-full">
          <div className="md:w-[60%] flex flex-col gap-2 sm:gap-5 items-center text-center">
            <StatusWork />
            <motion.h1
              initial={{ opacity: 0, x: -1, pathLength: 0 }}
              animate={{ opacity: 1, x: 1, pathLength: 1 }}
              transition={{ duration: 100, type: "spring" }}
              className="text-4xl md:text-6xl font-bold">Hi, I am <br /> Nur {" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">
                  Aria
                </span>
              </span>
              {" "} Hibnastiar, <br />
              {dataAboutMe.title}
            </motion.h1>
            <p className="text-gray-1000 ">{dataAboutMe.short_bio}</p>
            <Button onPress={onOpen} className="py-2 px-3 rounded-full border border-gray-600 bg-gradient-to-r from-gray-50 to-gray-500 dark:from-gray-50 dark:to-gray dark:text-white duration-500 ease-in-out hover:duration-500 hover:shadow-xl hover:shadow-pink-500/20 font-semibold">Contact Me</Button>
          </div>
          <div className="w-full sm:w-fit flex justify-center sm:justify-start">
            <Tooltip
              showArrow
              classNames={{
                base: [
                  "before:bg-gray-700",
                ],
                content: ["py-2 px-4 shadow-xl", "text-black font-bold border border-gray-600 bg-gradient-to-r from-gray-50 to-gray-500 dark:from-gray-50 dark:to-gray dark:text-white"],
              }}
              content="Nur Aria Hibnastiar">
              <Image src={dataAboutMe.url_img} width={1000} height={1000} alt="photos-profile" className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full hover:shadow-2xl hover:shadow-pink-500/20 hover:duration-500 duration-500" />
            </Tooltip>
          </div>
        </main >
      </div >

      {/* About Me */}
      <div className="sm:max-w-screen-lg sm:mx-auto mb-10 p-4 xl:p-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center sm:text-start mb-5">About Me</h1>
        <Tabs des={dataDeskriptions} educations={dataEducations} experiences={dataExperiences} resumeUrl={dataAboutMe.resumeUrl} />
      </div>

      {/* Showcase */}
      <section className="sm:max-w-screen-lg sm:mx-auto mb-10 p-4 xl:p-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center sm:text-start">Showcase</h1>
        <p className="text-gray-1000 mb-4 text-center md:text-start">Best Projects I've Worked On</p>
        <BentoCardComponent />
        <div className="w-full flex justify-center mt-4">
          <button className="py-2 px-3 rounded-full border border-gray-600 bg-gradient-to-r from-gray-50 to-gray-500 dark:from-gray-50 dark:to-gray dark:text-white duration-500 ease-in-out hover:duration-500 hover:shadow-xl hover:shadow-pink-500/20 font-semibold">See More</button>
        </div>
      </section>
      {/* 
      <main className="relative max-w-screen-lg mx-auto z-10 bg-black">
        <Meteor />
      </main> */}


      {/* Modal Contact Component */}
      <ContactComponent isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

export default Page