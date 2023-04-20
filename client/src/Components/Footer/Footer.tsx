import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


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
      <Link className="text-lg sm:text-base mx-1  md:text-lg lg:mx-4 capitalize" href="/">Home</Link>
      <Link className="text-lg sm:text-base mx-1 md:text-lg lg:mx-4 capitalize" href="/explore">Explore</Link>
      <Link className="text-lg sm:text-base mx-1 md:text-lg lg:mx-4 capitalize" href="/contact">Contact</Link>
    </nav>
    <p className="text-sm sm:text-base">&copy; 2023 Gisselle Rodriguez. All rights reserved.</p>
  </div>
</div>
  )
}

export default Footer