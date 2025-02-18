import { useState } from "react";
import CardComponent from './CardComponent';
import { motion, AnimatePresence } from 'framer-motion';


const tabs = [
  { id: "description", label: "Description" },
  { id: "educations", label: "Educations" },
  { id: "experiences", label: "Experiences" },
  { id: "resume", label: "Resume" },
];

const tabVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

interface TabsProps {
  educations: Education[];
  des: string;
  experiences: Experience[];
  resumeUrl: string;
}

interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  imageUrl: string;
}

interface Experience {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  imageUrl: string;
}


const Tabs = ({ des, educations, experiences, resumeUrl }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="flex flex-col w-full">
      {/* Tabs Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex border-b border-b-gray-500 w-max ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium rounded-t-md transition-size duration-300 ${activeTab === tab.id
                ? "border-b-2 border-pink-500 text-pink-500"
                : "text-gray-800 hover:text-pink-500"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === "description" && (
            <motion.div
              key="description"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" inset-0"
            >
              <div className="p-4 mt-4 border border-gray-500 rounded-lg text-base tracking-wide sm:tracking-normal font-normal leading-loose">
                {des}
              </div>
            </motion.div>
          )}

          {activeTab === "educations" && (
            <motion.div
              key="educations"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" inset-0"
            >
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {educations.map((edu, index) => (
                  <CardComponent key={index} {...edu} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "experiences" && (
            <motion.div
              key="experiences"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" inset-0"
            >
              <div className="p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {experiences.map((exp, index) => (
                  <CardComponent key={index} {...exp} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "resume" && (
            <motion.div
              key="resume"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" inset-0"
            >
              <iframe
                className="p-4 mt-4 rounded-xl border border-gray-400 dark:border-gray-700"
                src={resumeUrl}
                width="100%"
                height="1200px"
                title="PDF Viewer"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs