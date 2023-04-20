import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

function Header() {
    const router = useRouter()
    return (
        <nav className={'bg-gradient-to-b from-[rgb(48,37,95)] to-[rgb(187,214,253)] top-0 flex h-10v w-full items-center justify-around z-10 sm:bg-gradient-to-r sm:from-[rgb(48,37,95)] sm:to-[rgb(187,214,253)] sm:h-full sm:w-10v'}>
            <div className='hidden md:block'>
                <Image
                alt="Mountains"
                src={`/icon.jpeg`}
                height={65}
                className={"rounded-full cursor-pointer"}
                width={65}
                onClick={() => router.push('/')}
                />
            </div>
            <div>
                <ul className="list-none flex">
                <li className="mx-6 capitalize text-xl sm:font-bold  font-mono cursor-pointer tracking-wider sm:text-white " onClick={() => router.push('/')}>home</li>
                <li className="mx-6 capitalize text-xl sm:font-bold  lg:font-extrabold font-mono cursor-pointer tracking-wider text-stroke text-stroke-blue sm:text-white lg:text-[rgb(25,25,112)] mx-4" onClick={() => router.push('/explore')}>explore</li>
                <li className="mx-6 capitalize text-xl sm:font-bold  lg:font-extrabold font-mono cursor-pointer tracking-wider text-stroke text-stroke-blue sm:text-white lg:text-[rgb(25,25,112)] mx-4" onClick={() => router.push('/contact')}>contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header