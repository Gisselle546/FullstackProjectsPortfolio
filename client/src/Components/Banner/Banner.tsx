import React from 'react'

function Banner() {
  return (
    <>
    <div className="h-[60vh] w-full relative">
      <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-[rgb(48,37,95)] to-[rgb(187,214,253)]"></div>
      <div
        className="h-full w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/reig.png')" }}
      >
        <div className="h-full w-full flex flex-col justify-center items-left md:mx-8 sm:mx-0">
          <h1 className=" sm: text-4xl md: text-5xl font-bold tracking-widest text-stroke text-stroke-white text-white mx-2" >Scaling Code Heights:</h1>
          <h3 className="text-[rgb(25,25,112)] text-2xl font-semibold tracking-wide mx-2 sm: mx-0">Gisselle&apos;s Dev Endeavors</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
