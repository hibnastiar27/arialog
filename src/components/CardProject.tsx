'use client'

import React from 'react'
import Link from 'next/link'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import { Accordion, AccordionItem } from '@heroui/react'


const LogoGithub = ({ color }: any) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={`${color} fill-current`} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2492_238)">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9958 0.600098C9.16477 0.601567 6.42657 1.60426 4.27083 3.42888C2.11508 5.25351 0.682361 7.78108 0.228845 10.5597C-0.22467 13.3382 0.33059 16.1866 1.79535 18.5954C3.26011 21.0043 5.53885 22.8166 8.2241 23.7082C8.81651 23.8181 9.03965 23.451 9.03965 23.1388C9.03965 22.8266 9.0278 21.9214 9.02385 20.9318C5.70635 21.6485 5.00534 19.5319 5.00534 19.5319C4.46427 18.1575 3.68228 17.7962 3.68228 17.7962C2.60015 17.0618 3.76325 17.0756 3.76325 17.0756C4.9619 17.16 5.59183 18.2988 5.59183 18.2988C6.65422 20.1111 8.38207 19.5869 9.06137 19.2806C9.16801 18.5128 9.47804 17.9906 9.81966 17.6941C7.16961 17.3956 4.38528 16.3785 4.38528 11.8351C4.36885 10.6568 4.80861 9.51724 5.61355 8.65229C5.49112 8.35384 5.08235 7.14827 5.73005 5.51074C5.73005 5.51074 6.73123 5.19266 9.01004 6.72613C10.9647 6.19464 13.0269 6.19464 14.9815 6.72613C17.2584 5.19266 18.2576 5.51074 18.2576 5.51074C18.9072 7.14435 18.4985 8.34992 18.3761 8.65229C19.1835 9.51738 19.6242 10.6589 19.6063 11.839C19.6063 16.3923 16.816 17.3956 14.162 17.6882C14.5886 18.0573 14.9697 18.7779 14.9697 19.8853C14.9697 21.4718 14.9559 22.748 14.9559 23.1388C14.9559 23.4549 15.1711 23.824 15.7754 23.7082C18.4609 22.8165 20.7399 21.0039 22.2046 18.5946C23.6694 16.1853 24.2243 13.3365 23.7703 10.5577C23.3163 7.77889 21.8828 5.25129 19.7264 3.42698C17.5699 1.60267 14.8311 0.600635 11.9997 0.600098H11.9958Z" fill={color} />
        <path d="M4.58643 17.6252C4.56076 17.6842 4.46597 17.7018 4.38896 17.6606C4.31194 17.6194 4.25468 17.5428 4.28233 17.4819C4.30997 17.421 4.40278 17.4053 4.4798 17.4466C4.55681 17.4878 4.61605 17.5663 4.58643 17.6252Z" fill={color} />
        <path d="M5.07027 18.1613C5.02937 18.1818 4.98258 18.1875 4.93792 18.1774C4.89325 18.1674 4.85348 18.1423 4.8254 18.1063C4.74839 18.0238 4.73258 17.9099 4.79183 17.8589C4.85107 17.8078 4.95771 17.8314 5.03472 17.9139C5.11174 17.9963 5.12951 18.1102 5.07027 18.1613Z" fill={color} />
        <path d="M5.5402 18.8428C5.46714 18.8938 5.34273 18.8428 5.27361 18.7407C5.2545 18.7224 5.2393 18.7004 5.22892 18.6761C5.21854 18.6518 5.21318 18.6257 5.21318 18.5993C5.21318 18.5729 5.21854 18.5468 5.22892 18.5225C5.2393 18.4982 5.2545 18.4763 5.27361 18.4579C5.34668 18.4089 5.47109 18.4579 5.5402 18.5581C5.60932 18.6582 5.61129 18.7917 5.5402 18.8428V18.8428Z" fill={color} />
        <path d="M6.17806 19.5024C6.1129 19.5751 5.9806 19.5554 5.87199 19.4573C5.76338 19.3591 5.7377 19.2256 5.80287 19.1549C5.86803 19.0842 6.00034 19.1039 6.1129 19.2001C6.22545 19.2963 6.24718 19.4317 6.17806 19.5024V19.5024Z" fill={color} />
        <path d="M7.07256 19.8872C7.04294 19.9795 6.90866 20.0207 6.77438 19.9815C6.6401 19.9422 6.55124 19.8322 6.57691 19.738C6.60258 19.6438 6.73884 19.6006 6.87509 19.6438C7.01134 19.6869 7.09823 19.791 7.07256 19.8872Z" fill={color} />
        <path d="M8.04817 19.9541C8.04817 20.0503 7.93759 20.1327 7.79541 20.1347C7.65323 20.1367 7.53672 20.0581 7.53672 19.9619C7.53672 19.8657 7.6473 19.7833 7.78948 19.7813C7.93166 19.7793 8.04817 19.8559 8.04817 19.9541Z" fill={color} />
        <path d="M8.95642 19.8028C8.9742 19.899 8.87546 19.9991 8.73328 20.0227C8.5911 20.0463 8.4667 19.9893 8.44892 19.8951C8.43115 19.8008 8.53384 19.6987 8.67207 19.6732C8.8103 19.6477 8.93865 19.7066 8.95642 19.8028Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_2492_238">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>

  )
}

const CardProject = ({ judul, tahun, kategori, github, demo, tech }: any) => {
  return (
    <div className='space-y-3 p-4 border rounded-3xl border-gray/20'>
      <img src="img/profile.jpg" alt="thumbnail-judul" className='w-full h-[200px] object-cover rounded-2xl' />
      <h1 className='text-2xl font-bold'>{judul}</h1>
      <div className='flex justify-between items-center'>
        <div id='yearKategori' className='flex items-center gap-4 text-gray font-medium'>
          <p className='py-2 px-4 rounded-full font-bold bg-primary w-fit text-white dark:bg-gray-300'>{tahun}</p>
          <p>{kategori}</p>
        </div>

        <div className="link flex gap-2 items-center">
          <Link target='_blank' href={github} className='github bg-primary dark:bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center'>
            <LogoGithub color="text-white" />
          </Link>
          <Link target='_blank' href={demo} className='demo bg-primary dark:bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center'>
            <GlobeAltIcon className='w-6 h-6 text-white' />
          </Link>
        </div>
      </div>
      <Accordion variant="light" fullWidth={true} isCompact={true} className="p-0 flex flex-col gap-1 w-full">
        <AccordionItem title="Technologies" className='dark:text-gray-1000'>
          <ul className="list-disc *:ml-6">
            {tech.map((item: string, index: number) => {
              return (
                <li key={index}>{item}</li>
              )
            })}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CardProject