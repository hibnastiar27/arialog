import React from 'react'
import CardProject from '@/components/CardProject'

const Project = () => {

  const data = [
    {
      'id': 1,
      'nama': 'Personal Website Portfolio 2025',
      'kategori': "website",
      'tahun': 2024,
      'link_github': 'https://github.com/hibnastiar27',
      'link_demo': 'https://skripsi.arialog.com',
      'tech_stack': [
        'javascript', 'next-js', 'tailwindcss', 'mongodb'
      ]
    },
    {
      'id': 1,
      'nama': 'Personal Website',
      'kategori': "website",
      'tahun': 2024,
      'link_github': 'https://github.com/hibnastiar27',
      'link_demo': 'https://skripsi.arialog.com',
      'tech_stack': [
        'javascript', 'next-js', 'tailwindcss', 'mongodb'
      ]
    },
    {
      'id': 1,
      'nama': 'Personal Website Portfolio 2025 awdawd awdawd awdawd',
      'kategori': "website",
      'tahun': 2024,
      'link_github': 'https://github.com/hibnastiar27',
      'link_demo': 'https://skripsi.arialog.com',
      'tech_stack': [
        'javascript', 'next-js', 'tailwindcss', 'mongodb'
      ]
    }
  ]
  return (
    <div className="w-full mb-16 sm:mt-16 md:max-w-screen-xl md:mx-auto flex flex-col gap-6 px-6">
      <div className="w-full">
        <div className="my-4 flex gap-2">
          <button className='px-4 py-2 bg-primary text-white rounded-full'>All</button>
          <button className='px-4 py-2 bg-primary text-white rounded-full'>Website</button>
          <button className='px-4 py-2 bg-primary text-white rounded-full'>Data</button>
        </div>
        <div className='grid md:grid-cols-3 gap-4 *:h-fit'>
          {data.map((item, index) => {
            return (
              <CardProject
                key={index}
                judul={item.nama}
                tahun={item.tahun}
                github={item.link_github}
                demo={item.link_demo}
                tech={item.tech_stack}
                kategori={''} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project