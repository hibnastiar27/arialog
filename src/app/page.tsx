'use client'

import { Tooltip } from "@heroui/react";
import TabsComponent from "@/components/TabsComponent";


const StatusWork = () => {
  return (
    <div className="flex bg-gray-300 w-fit py-2 px-4 rounded-full gap-2 items-center text-sm">
      <span className="w-2 h-2 rounded-full animate-pulse bg-success-500"></span>
      <p>
        Available to work
      </p>
    </div>
  )
}

const page = () => {
  return (
    <>
      <div className="w-full h-screen justify-center items-center flex sm:max-w-screen-xl sm:mx-auto gap-6 px-6">
        <main className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4 sm:w-full">
          <div className="md:w-[60%] flex flex-col gap-2 sm:gap-5 items-center text-center">
            <StatusWork />
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I am {" "}
              <span className="selection:bg-white selection:text-pink-500 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">
                  Aria
                </span>
              </span>
              , <br />
              Fullstack Developer
            </h1>
            <p className="text-gray-1000 ">Transforming ideas into code while learning and thriving in Artificial Intelligence.</p>
            <button className="py-2 px-3 rounded-full border border-gray-600 bg-gradient-to-r from-gray-50 to-gray-500 dark:from-gray-50 dark:to-gray dark:text-white duration-500 ease-in-out hover:duration-500 hover:shadow-xl hover:shadow-pink-100">Contact Me</button>
          </div>
          <div className="w-full sm:w-fit flex justify-center sm:justify-start">
            <Tooltip
              showArrow
              classNames={{
                base: [
                  "before:bg-gray-700",
                ],
                content: ["py-2 px-4 shadow-xl", "text-black font-bold border border-gray-600 bg-gradient-to-r from-gray-50 to-gray-500 dark:from-gray-50 dark:to-gray dark:text-white"],
              }}
              content="Nur Aria Hibnastiar">
              <img src="/img/profile.jpg" alt="photos-profile" className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full hover:shadow-2xl hover:shadow-pink-300 hover:duration-500 duration-500" />
            </Tooltip>
          </div>
        </main >
      </div >

      <div className="sm:max-w-screen-xl sm:mx-auto px-6 mb-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center sm:text-start mb-5">About Me</h1>
        <TabsComponent />
      </div>
    </>
  )
}

export default page