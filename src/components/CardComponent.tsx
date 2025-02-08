import React from 'react'
import { Accordion, AccordionItem, Image } from '@heroui/react'

interface CardProps {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  imageUrl: string;
}

const CardComponent = ({ title, institution, duration, imageUrl, description }: CardProps) => {

  return (
    <div className='flex flex-col md:flex-row gap-4 w-full'>
      <div className="flex flex-col gap-4 w-full h-fit border rounded-xl border-gray-500  p-4">
        <Image
          isZoomed
          alt={title}
          src={imageUrl}
          width="100%"
          height={150}
        />
        <div className='w-full'>
          <h1 className="font-bold text-xl">{title}</h1>
          <div className='flex items-center gap-2 justify-between mt-2'>
            <p>{institution}</p>
            <p className='dark:text-gray-1000'>{duration}</p>
          </div>
          <Accordion variant="light" fullWidth={true} isCompact={true} className="p-0 flex flex-col gap-1 w-full">
            <AccordionItem title="Description" className='dark:text-gray-1000'>
              <ul className="list-disc *:ml-6">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>


  )
}

export default CardComponent


{/* <div className="flex flex-col gap-4 w-full h-fit border rounded-xl border-gray-500  p-4">
        <Image
          isZoomed
          alt="coba"
          src="https://heroui.com/images/album-cover.png"
          width="100%"
          height={150}
        />
        <div className='w-full'>
          <h1 className="font-bold text-xl">MSIB 5 - Data Analyst & Software Engineer</h1>
          <div className='flex items-center gap-2 justify-between mt-2'>
            <p>RevoU</p>
            <p className='dark:text-gray-1000'>5 Month</p>
          </div>
          <Accordion variant="light" fullWidth={true} isCompact={true} className="p-0 flex flex-col gap-1 w-full">
            <AccordionItem title="Description" className='dark:text-gray-1000'>
              <ul className="list-disc *:ml-6">
                <li>Algoritma dan Pemrograman</li>
                <li>Struktur Data</li>
                <li>Web Programming</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full h-fit border rounded-xl border-gray-500  p-4">
        <Image
          isZoomed
          alt="coba"
          src="https://heroui.com/images/album-cover.png"
          width="100%"
          height={150}
        />
        <div className='w-full'>
          <h1 className="font-bold text-xl">MSIB 6 - Data Analyst & Software Engineer</h1>
          <div className='flex items-center gap-2 justify-between mt-2'>
            <p>RevoU</p>
            <p className='dark:text-gray-1000'>5 Month</p>
          </div>
          <Accordion variant="light" fullWidth={true} isCompact={true} className="p-0 flex flex-col gap-1 w-full">
            <AccordionItem title="Description" className='dark:text-gray-1000'>
              <ul className="list-disc *:ml-6">
                <li>Algoritma dan Pemrograman</li>
                <li>Struktur Data</li>
                <li>Web Programming</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div> */}