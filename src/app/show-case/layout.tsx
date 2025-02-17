export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className='header p-8 sm:mt-16 sm:py-16 bg-gray-100'>
        <h1 className='text-5xl sm:text-8xl lg:text-9xl text-center capitalize font-bold'>SHOWCASE</h1>
      </section>
      <section>{children}</section>
    </>
  )
}