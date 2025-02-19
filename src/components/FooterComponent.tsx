import React from 'react'

const FooterComponent = () => {
  const now = new Date();
  const dateTime = now.getFullYear()
  return (
    <footer className='bg-gray-200 p-20 flex flex-col items-center mb-16 sm:mb-0'>
      <h1 className='text-6xl font-bold'>ARIALOG.</h1>
      <p>&copy; {dateTime} Nur Aria Hibnastiar. All Rights Reserved.</p>
    </footer>
  )
}

export default FooterComponent