import React from 'react'
import Image from 'next/image';


function Footer() {
  return (
    <div className="flex justify-evenly items-center h-[10rem]">
  <div>
    <Image
      alt="Mountains"
      src={`/icon.jpeg`}
      height={65}
      className="rounded-full"
      width={65}
    />
  </div>
  <div className="flex flex-col justify-around h-full">
    <nav>
      <a className="text-lg sm:text-base mx-1  md:text-lg lg:mx-4 capitalize" href="/">Home</a>
      <a className="text-lg sm:text-base mx-1 md:text-lg lg:mx-4 capitalize" href="/explore">Explore</a>
      <a className="text-lg sm:text-base mx-1 md:text-lg lg:mx-4 capitalize" href="/contact">Contact</a>
    </nav>
    <p className="text-sm sm:text-base">&copy; 2023 Gisselle Rodriguez. All rights reserved.</p>
  </div>
</div>
  )
}

export default Footer