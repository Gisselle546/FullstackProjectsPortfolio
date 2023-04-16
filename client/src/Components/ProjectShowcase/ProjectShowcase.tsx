import React from 'react'
import Slider from '../Slider/Slider'

function ProjectShowcase() {
  return (
    <div className="h-[40rem] justify-center items-center bg-white w-full flex flex-col">
        <div className=" text-2xl lg:text-4xl uppercase inline-block font-extrabold bg-gradient-to-r from-[rgb(48,37,95)] to-[rgb(187,214,253)] bg-clip-text text-transparent font-stretch-expanded"> Project&apos;s Showcase </div>
        <Slider/>
    </div>
  )
}

export default ProjectShowcase