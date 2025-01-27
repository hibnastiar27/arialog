"use client";

import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import { m } from 'framer-motion';
import { iframe } from 'framer-motion/client';

const TabsComponent = () => {
    let tabs = [
        {
            id: 2,
            label: "Educations",
            content: "[EDUKASi] Saya merupakan fresh graduate dengan keahlian fullstack website developer. Memiliki pengalaman magang sebagai Front End Web Developer di Kawan Kerja Indonesia, menjadi Koordinator Laboratorium ITN Malang. Aktif dalam program MSIB Batch 5 sebagai Data Analyst dan Software Engineer di RevoU, serta MSIB Batch 6 sebagai Platform & Web Developer (Django) di Educourse."
        },
        {
            id: 3,
            label: "Experiences",
            content: "[EXP] Saya merupakan fresh graduate dengan keahlian fullstack website developer. Memiliki pengalaman magang sebagai Front End Web Developer di Kawan Kerja Indonesia, menjadi Koordinator Laboratorium ITN Malang. Aktif dalam program MSIB Batch 5 sebagai Data Analyst dan Software Engineer di RevoU, serta MSIB Batch 6 sebagai Platform & Web Developer (Django) di Educourse."
        },
        {
            id: 1,
            label: "Resume",
            content: "https://drive.google.com/file/d/1t08yk-cGzX79Zj-64Dj506NAOCt9Bn6B/preview"
        },
    ]
    return (
        <div>
            <Tabs items={tabs} size="lg" variant="light" radius="full" color="primary" aria-label="Tabs About Me">
                {(item) => (
                    <Tab key={item.id} title={item.label} >
                        <div className='p-4 rounded-xl h-fit bg-white border border-gray-400'>
                            {item.id === 1 ? (
                                <iframe
                                    className='rounded-xl border border-gray-400'
                                    src={item.content}
                                    width="100%"
                                    height="1200px"
                                    title="PDF Viewer"
                                ></iframe>
                            ) : (
                                <p>{item.content}</p>
                            )}
                        </div>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}

export default TabsComponent