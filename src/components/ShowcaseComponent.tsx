'use client'
import { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Image,
} from "@heroui/react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

interface CardData {
  title: string;
  slug: string;
  kategori: string;
  tech_stack: string[];
  link_demo: string;
  link_github: string;
  url_img: string;
  description: string;
}

interface ShowcaseProps {
  data: CardData[];
  lang: 'en' | 'id';
}

const ShowcaseComponent = ({ data, lang }: ShowcaseProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleOpenModal = (card: CardData) => {
    setSelectedCard(card);
    onOpen();
  }

  return (
    <div className="w-full">
      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] overflow-hidden hover:shadow-xl hover:border-pink-500/50 transition-all duration-300 group h-full">
            
            {/* Top Image Container */}
            <div className="w-full h-[220px] md:h-[260px] shrink-0 relative cursor-pointer overflow-hidden border-b border-neutral-200 dark:border-neutral-800" onClick={() => handleOpenModal(item)}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              <Image
                alt={item.title}
                className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-700'
                src={item.url_img}
                radius="none"
                classNames={{ wrapper: "w-full h-full" }}
              />
            </div>

            {/* Bottom Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div>
                <span className="inline-block py-1 px-3 text-xs font-bold text-pink-600 bg-pink-100 dark:bg-pink-500/20 dark:text-pink-400 rounded-full mb-4 uppercase tracking-wider">
                  {item.kategori}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight group-hover:text-pink-500 transition-colors cursor-pointer" onClick={() => handleOpenModal(item)}>
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium line-clamp-2 mb-6">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-auto flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {item.tech_stack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                  {item.tech_stack.length > 3 && (
                    <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700">
                      +{item.tech_stack.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-2 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                  <Button 
                    onPress={() => handleOpenModal(item)}
                    variant="flat" 
                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold px-5 rounded-full text-sm"
                    endContent={<FiArrowRight />}
                  >
                    {lang === 'en' ? 'Case Study' : 'Detail'}
                  </Button>
                  
                  <div className="flex gap-2">
                    {item.link_demo !== "none" && (
                      <a href={item.link_demo} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/20 transition-colors">
                        <FiExternalLink className="text-base" />
                      </a>
                    )}
                    {item.link_github !== "private" && (
                      <a href={item.link_github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/20 transition-colors">
                        <FiGithub className="text-base" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Two-Column Modal (Sama seperti sebelumnya) */}
      <Modal size='5xl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside' backdrop="blur" classNames={{ closeButton: "z-50 right-6 top-6 text-xl bg-black/30 hover:bg-pink-500 text-white rounded-full p-2 backdrop-blur-md" }}>
        <ModalContent className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 p-0 overflow-hidden">
          {() => (
            <ModalBody className="p-0 gap-0">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
                
                {/* Left Column: Image Area */}
                <div className="bg-neutral-100 dark:bg-neutral-900 w-full h-[300px] md:h-full relative flex items-center justify-center p-8">
                  <Image
                    alt={selectedCard?.title}
                    className='object-cover w-full shadow-2xl rounded-xl'
                    src={selectedCard?.url_img}
                    radius="none"
                  />
                </div>
                
                {/* Right Column: Content Area */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="w-fit text-xs font-bold uppercase tracking-widest text-pink-600 bg-pink-100 dark:bg-pink-500/20 dark:text-pink-400 py-1.5 px-4 rounded-full mb-6">
                    {selectedCard?.kategori}
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {selectedCard?.title}
                  </h2>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed font-medium">
                    {selectedCard?.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCard?.tech_stack.map((tech, idx) => (
                        <span key={idx} className="text-sm font-bold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-2 px-4 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {selectedCard?.link_demo !== "none" && (
                      <Button
                        as="a"
                        href={selectedCard?.link_demo}
                        target="_blank"
                        className="bg-pink-500 text-white font-bold py-6 px-8 shadow-lg shadow-pink-500/30"
                        radius="full"
                        startContent={<FiExternalLink />}
                      >
                        {lang === 'en' ? 'Live Demo' : 'Kunjungi Web'}
                      </Button>
                    )}
                    {selectedCard?.link_github !== "private" && (
                      <Button
                        as="a"
                        href={selectedCard?.link_github}
                        target="_blank"
                        variant="bordered"
                        className="border-neutral-200 dark:border-neutral-700 font-bold py-6 px-8 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        radius="full"
                        startContent={<FiGithub />}
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ShowcaseComponent;
