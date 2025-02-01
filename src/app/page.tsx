import { Chip } from "@heroui/chip";
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
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I am Aria, <br /> Fullstack Developer</h1>
            <p className="text-gray-1000 ">Transforming ideas into code while learning and thriving in Artificial Intelligence.</p>
            <button className="py-2 px-3 rounded-full bg-gradient-to-br from-primary-700 to-primary text-white">Contact Me</button>
          </div>
          <div className="w-full sm:w-fit flex justify-center sm:justify-start">
            <img src="/img/profile.jpg" alt="photos-profile" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full shadow-2xl shadow-primary/30" />
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