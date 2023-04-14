import React from 'react'
import Image from 'next/image';



function Header() {
  return (
    <nav className="bg-transparent absolute top-0 flex h-10v w-full items-center justify-around z-10">
      <div>
        <Image
          alt="Mountains"
          src={`/icon.jpeg`}
          height={65}
          className="rounded-full"
          width={65}
        />
      </div>
      <div>
        <ul className="list-none flex">
          <li className="mx-6 capitalize text-lg font-semibold tracking-wide font-mono cursor-pointer ">home</li>
          <li className="mx-6 capitalize text-lg font-semibold tracking-wide font-mono cursor-pointer">explore</li>
          <li className="mx-6 capitalize text-lg font-semibold tracking-wide font-mono cursor-pointer">gallery</li>
        </ul>
      </div>
    </nav>
  );

}

export default Header