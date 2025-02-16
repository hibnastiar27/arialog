'use client'

import {
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Form,
  Input,
  Textarea
} from "@heroui/react";
import TabsComponent from "@/components/TabsComponent";
import Image from "next/image";
import { motion } from "framer-motion";

const dataAboutMe = {
  "title": "Fullstack Developer",
  "short_bio": "Transforming ideas into code while learning and thriving in Artificial Intelligence.",
  "url_img": "/img/profile.jpg",
  "resumeUrl": "https://drive.google.com/file/d/1t08yk-cGzX79Zj-64Dj506NAOCt9Bn6B/preview"
}

const dataEducations = [
  {
    title: "S1 - Teknik Informatika",
    institution: "Institut Teknologi Nasional Malang",
    duration: "3,5 Years",
    description: ["Algoritma dan Pemrograman", "Struktur Data", "Web Programming"],
    imageUrl: "/img/dark-itn.png"
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
    imageUrl: "/img/dark-revou.png"
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
    imageUrl: "/img/dark-edu.png"
  },
]

const dataExperiences = [
  {
    title: "Frontend Developer Intern",
    institution: "Startup XYZ",
    duration: "6 Months",
    description: ["Membangun UI/UX", "Menggunakan Next.js", "Mengintegrasi API"],
    imageUrl: "https://heroui.com/images/album-cover.png"
  },
  {
    title: "Frontend Developer Intern",
    institution: "Startup XYZ",
    duration: "6 Months",
    description: ["Membangun UI/UX", "Menggunakan Next.js", "Mengintegrasi API"],
    imageUrl: "https://heroui.com/images/album-cover.png"
  },
  {
    title: "Frontend Developer Intern",
    institution: "Startup XYZ",
    duration: "6 Months",
    description: ["Membangun UI/UX", "Menggunakan Next.js", "Mengintegrasi API"],
    imageUrl: "https://heroui.com/images/album-cover.png"
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

const page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="w-full h-screen justify-center items-center flex sm:max-w-screen-xl sm:mx-auto gap-6 px-6 dark:min-h-screen dark:bg-blend-overlay bg-[url('/img/bg-pattern1.png')] dark:bg-[url('/img/bg-pattern.png')] bg-cover bg-center">
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

      <div className="sm:max-w-screen-xl sm:mx-auto px-6 mb-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center sm:text-start mb-5">About Me</h1>
        <TabsComponent educations={dataEducations} experiences={dataExperiences} resumeUrl={dataAboutMe.resumeUrl} />
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact Me</ModalHeader>
              <Form>
                <ModalBody>
                  <Input
                    isRequired
                    errorMessage="Please enter a valid fullname"
                    label="Full Name"
                    labelPlacement="outside"
                    name="fullname"
                    placeholder="Enter your full name"
                    type="text"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Textarea
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button className="text-pink-500" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button className="bg-pink-500 text-white" onPress={onClose}>
                    Send
                  </Button>
                </ModalFooter>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default page