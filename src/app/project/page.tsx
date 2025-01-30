import React from 'react'
import CardProject from '@/components/CardProject'

const Project = () => {
  return (
    <div className="w-full md:max-w-screen-xl md:mx-auto flex flex-col gap-6 px-6">
      <div className="w-full">
        <CardProject />
      </div>
    </div>
  )
}

export default Project