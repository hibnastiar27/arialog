import React from 'react'
import Link from 'next/link'

const CardProject = () => {
  return (
    <div className='space-y-3 p-4 border rounded-3xl border-gray/20'>
      <img src="img/profile.jpg" alt="thumbnail-judul" className='w-full h-[200px] object-cover rounded-2xl' />
      <h1 className='text-2xl font-bold'>Designing Dashboards</h1>
      <div className='flex justify-between items-center'>
        <div id='yearKategori' className='flex items-center gap-4 text-gray font-medium'>
          <p className='py-2 px-4 rounded-full font-bold bg-primary w-fit text-white dark:text-primary dark:bg-white'>2021</p>
          <p>Website</p>
        </div>

        <div className="link flex gap-2 items-center">
          <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
          <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        </div>
      </div>
      <div className="link flex gap-2 items-center">
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
        <Link href="" className='bg-primary dark:bg-white w-10 h-10 rounded-full'></Link>
      </div>
    </div>
  )
}

export default CardProject