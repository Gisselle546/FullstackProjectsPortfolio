import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/Components/Banner/Banner'

import SeparatorMountainBottom from '@/Components/SeparatorMountainBottom/SeparatorMountainBottom'
import ProjectShowcase from '@/Components/ProjectShowcase/ProjectShowcase'
import SeparatorMountainTop from '@/Components/SeparatorMountainTop/SeparatorMountainTop'
import AboutMe from '@/Components/AboutMe/AboutMe'
import PageTemplate from '@/PageTemplate/PageTemplate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
      <PageTemplate type="homepage">
        <Banner/>
        <SeparatorMountainBottom/>
        <ProjectShowcase/> 
        <SeparatorMountainTop/>
        <AboutMe/>
      </PageTemplate>
    </>
  )
}
