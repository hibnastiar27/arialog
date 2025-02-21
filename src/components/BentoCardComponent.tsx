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
  tech_stack: string;
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
            // onClick={onOpen}
            onClick={() => handleOpenModal(item)}
            key={index}
            className={`border dark:border-gray-500 group text-white rounded-2xl relative ${colSpan} ${rowSpan}`}
          >
            <Image
              alt='gambar'
              isZoomed
              className='rounded-2xl group-hover:scale-110 transition-all duration-300'
              src={item.url_img}
              width="100%"
              height={320}
            />
            <div className='z-10 absolute top-0 p-4 flex flex-col-reverse justify-between w-full h-full bg-gradient-to-t from-black to-transparent'>
              <h1 className='font-bold text-left text-xl capitalize'>{item.title}</h1>
              <div className='flex justify-between'>
                <p className='py-2 px-4 bg-gray-1000/50 dark:bg-gray-500/50 border border-gray-1000 dark:border-gray-700 backdrop-blur-sm rounded-full '>{item.kategori}</p>
                {/* <Link href="">See More</Link> */}
              </div>
            </div>
          </button>
        );
      })}

      {/* Modal Pop-up */}
      <Modal size='4xl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  flex-col gap-1">{selectedCard?.title}</ModalHeader>
              <ModalBody>
                <Image
                  alt={selectedCard?.title}
                  className='rounded-2xl object-cover group-hover:scale-110 transition-all duration-300'
                  src={selectedCard?.url_img}
                  width="100%"
                  height={250}
                />
                <p className="text-sm rounded-full bg-gray-500 w-fit py-2 px-4">{selectedCard?.kategori}</p>
                <p className="">{selectedCard?.description}</p>
                <p className="text-sm font-bold">Tech Stack: {selectedCard?.tech_stack}</p>
                <div className="flex *:py-2 *:px-4 *:bg-gray-400 *:border *:border-gray-700 *:rounded-full  gap-2 mt-2">
                  {selectedCard?.link_demo !== "none" && (
                    <a href={selectedCard?.link_demo} target="_blank" className="text-blue-500 hover:bg-gray-500 hover:border-gray-800 ">
                      Demo
                    </a>
                  )}
                  {selectedCard?.link_github !== "private" && (
                    <a href={selectedCard?.link_github} target="_blank" className="text-blue-500 hover:bg-gray-500 hover:border-gray-800">
                      GitHub
                    </a>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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