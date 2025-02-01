"use client";

import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import CardComponent from './CardComponent';
const TabsComponent = () => {
  return (
    <div className='flex flex-col sm:justify-start sm:items-start justify-center items-center'>
      <Tabs size="lg" variant="light" radius="full" color="default" aria-label="Tabs About Me">
        <Tab title="Educations" className=''>
          <div className='w-fit dark:text-foreground'>
            <CardComponent />
          </div>
        </Tab>

        <Tab title="Experiences" className=''>
          <div className='w-fit dark:text-foreground'>
            <CardComponent />
          </div>
        </Tab>

        <Tab title="Resume" className='w-full'>
          <div className='w-full dark:text-foreground'>
            <iframe
              className='rounded-xl border border-gray-400 dark:border-gray-700'
              src="https://drive.google.com/file/d/1t08yk-cGzX79Zj-64Dj506NAOCt9Bn6B/preview"
              width="100%"
              height="1200px"
              title="PDF Viewer"
            ></iframe>
          </div>
        </Tab>
      </Tabs>
    </div >
  )
}

export default TabsComponent