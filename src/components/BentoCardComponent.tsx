'use client'
import React from 'react'
import {
  Image,
} from '@heroui/react';
import Link from 'next/link';

const BentoCardComponent = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ]; // Ubah jumlah item sesuai kebutuhan
  return (
    <div className="flex flex-col w-full lg:grid lg:grid-cols-3 auto-rows-[minmax(0,1fr)] gap-4 md:p-4">
      {items.map((item, index) => {
        let colSpan = "col-span-1";
        let rowSpan = "row-span-1";

        // Logika berdasarkan jumlah item
        if (items.length === 2) {
          if (index === 0) colSpan = "col-span-2";
        } else if (items.length === 4) {
          if (index === 0 || index === 3) colSpan = "col-span-2";
        } else if (items.length === 5) {
          if (index === 0 || index === 4) colSpan = "col-span-2";
          if (index === 1 || index === 2) rowSpan = "row-span-2";
        } else if (items.length === 6) {
          if (index === 0 || index === 5) colSpan = "col-span-2";
          if (index === 1) rowSpan = "row-span-2";
        } else if (items.length === 7) {
          if (index === 0 || index === 6) colSpan = "col-span-2";
        }

        return (
          <Link
            href="#"
            key={index}
            className={`border dark:border-gray-500 group text-white rounded-2xl relative ${colSpan} ${rowSpan}`}
          >
            <Image
              alt='gambar'
              isZoomed
              className='rounded-2xl group-hover:scale-110 transition-all duration-300'
              src="/img/bg-pattern.png"
              width="100%"
              height={380}
            />
            <div className='z-10 absolute top-0 p-4 flex flex-col-reverse justify-between w-full h-full'>
              <h1 className='font-bold text-xl capitalize'>sistem informasi customer relationship management toko elektronik</h1>
              <div className='flex justify-between'>
                <p className='py-2 px-4 bg-gray-1000/50 dark:bg-gray-500/50 border border-gray-1000 dark:border-gray-700 backdrop-blur-sm rounded-full '>Website</p>
                {/* <Link href="">See More</Link> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default BentoCardComponent