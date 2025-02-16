import React from 'react'

const FooterComponent = () => {
  let now = new Date();
  let dateTime = now.getFullYear()
  console.log(dateTime);
  return (
    <footer className='dark:bg-gray-200 p-20 flex flex-col items-center'>
      <h1 className='text-6xl font-bold'>ARIALOG.</h1>
      <p>&copy; {dateTime} Nur Aria Hibnastiar. All Rights Reserved.</p>
    </footer>
  )
}

export default FooterComponent