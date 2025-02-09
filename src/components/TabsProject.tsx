"use client";

import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import CardProject from './CardProject';


const TabsProject = () => {
  return (
    <div className='flex flex-col sm:justify-start sm:items-start justify-center items-center'>
      <Tabs size="lg" variant="light" radius="full" color="default" aria-label="Tabs About Me">
        <Tab title="Educations" className='w-full'>
          <div className='w-full flex flex-col md:flex-row gap-4 dark:text-foreground'>
          </div>
        </Tab>
      </Tabs>
    </div >
  )
}

export default TabsProject