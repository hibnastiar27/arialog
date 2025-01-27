
import TabsComponent from "@/components/TabsComponent";

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-6 px-6">
            <main className="flex items-center my-5 justify-between">
                <div className="space-y-5 w-[60%]">
                    <h1 className="text-6xl font-bold tracking-wide">Hi, I am Aria, <br /> Fullstack Developer</h1>
                    <p >Saya merupakan fresh graduate dengan keahlian fullstack website developer. Memiliki pengalaman magang sebagai Front End Web Developer di Kawan Kerja Indonesia, menjadi Koordinator Laboratorium ITN Malang. Aktif dalam program MSIB Batch 5 sebagai Data Analyst dan Software Engineer di RevoU, serta MSIB Batch 6 sebagai Platform & Web Developer (Django) di Educourse. </p>
                    <button className="py-2 px-3 rounded-full bg-gradient-to-br from-primary-700 to-primary text-white">Contact Me</button>
                </div>
                <div className="flex justify-center items-center justify-self-center bg-primary rounded-full w-[300px] h-[300px]">
                    <img src="/img/profile.jpg" alt="photos-profile" className="w-full h-full object-cover rounded-full shadow-2xl shadow-primary/30" />
                </div>
            </main>

            <TabsComponent />
        </div>
    )
}

export default page