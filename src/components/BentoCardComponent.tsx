'use client'
import { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@heroui/react";

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

interface BentoCardProps {
  data: CardData[];
}

const BentoCardComponent = ({ data }: BentoCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleOpenModal = (card: CardData) => {
    setSelectedCard(card);
    onOpen();
  }

  return (
    <div className="flex flex-col w-full lg:grid lg:grid-cols-3 auto-rows-[minmax(0,1fr)] gap-4">
      {data.map((item, index) => {
        let colSpan = "col-span-1";
        let rowSpan = "row-span-1";

        // Logika berdasarkan jumlah item
        if (data.length === 2) {
          if (index === 0) colSpan = "col-span-2";
        } else if (data.length === 4) {
          if (index === 0 || index === 3) colSpan = "col-span-2";
        } else if (data.length === 5) {
          if (index === 0 || index === 4) colSpan = "col-span-2";
          if (index === 1 || index === 2) rowSpan = "row-span-2";
        } else if (data.length === 6) {
          if (index === 0 || index === 5) colSpan = "col-span-2";
          if (index === 1) rowSpan = "row-span-2";
        } else if (data.length === 7) {
          if (index === 0 || index === 6) colSpan = "col-span-2";
        }

        return (
          <button
            onClick={() => handleOpenModal(item)}
            key={index}
            className={`border border-neutral-200 dark:border-neutral-800 group text-white rounded-2xl relative overflow-hidden ${colSpan} ${rowSpan}`}
          >
            <Image
              alt={item.title}
              className='rounded-2xl group-hover:scale-105 transition-all duration-500 object-cover'
              src={item.url_img}
              width="100%"
              height={320}
              radius="none"
            />
            <div className='z-10 absolute inset-0 p-6 flex flex-col-reverse justify-between w-full h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className="flex flex-col items-start gap-2">
                <p className='py-1 px-3 text-xs font-semibold bg-pink-500/90 text-white rounded-full'>{item.kategori}</p>
                <h1 className='font-bold text-left text-xl lg:text-2xl capitalize text-white leading-tight'>{item.title}</h1>
              </div>
            </div>
          </button>
        );
      })}

      {/* Modal Pop-up */}
      <Modal size='4xl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside' backdrop="blur">
        <ModalContent className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">{selectedCard?.title}</ModalHeader>
              <ModalBody className="gap-6">
                <div className="w-full relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <Image
                    alt={selectedCard?.title}
                    className='object-cover w-full'
                    src={selectedCard?.url_img}
                    width="100%"
                    radius="none"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 py-1.5 px-4">
                    {selectedCard?.kategori}
                  </span>
                </div>
                
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {selectedCard?.description}
                </p>
                
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCard?.tech_stack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md py-1.5 px-3">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  {selectedCard?.link_demo !== "none" && (
                    <Button
                      as="a"
                      href={selectedCard?.link_demo}
                      target="_blank"
                      className="bg-pink-500 text-white font-medium"
                      radius="full"
                    >
                      Visit Demo
                    </Button>
                  )}
                  {selectedCard?.link_github !== "private" && (
                    <Button
                      as="a"
                      href={selectedCard?.link_github}
                      target="_blank"
                      variant="bordered"
                      className="border-neutral-300 dark:border-neutral-700 font-medium"
                      radius="full"
                    >
                      View on GitHub
                    </Button>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} radius="full">
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default BentoCardComponent