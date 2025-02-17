'use client'

import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Image } from "@heroui/react";

const page = () => {
  return (
    <>
      <div className="sm:max-w-screen-xl h-screen p-6 m-auto">
        <Breadcrumbs
          classNames={{
            list: "bg-gradient-to-br from-gray-100 shadow-lg to-gray-500 dark:from-gray-900 dark:to-gray-400 shadow-small",
          }}
          itemClasses={{
            item: "text-black/50 data-[current=true]:text-black dark:text-white/60 dark:data-[current=true]:text-white",
            separator: "text-black/40 dark:text-white/40",
          }}
          underline="hover"
          variant="solid"
        >
          <BreadcrumbItem href="/show-case">Showcase</BreadcrumbItem>
          <BreadcrumbItem>Title</BreadcrumbItem>
        </Breadcrumbs>

        <div className='my-4'>
          <Image
            isZoomed
            className='h-[200px] sm:h-[300px] object-cover'
            alt="HeroUI hero Image"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width="100%"
          />
        </div>
      </div>
    </>
  )
}

export default page