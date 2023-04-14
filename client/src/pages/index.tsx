import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/Components/Banner/Banner'
import Header from '@/Components/Header/Header'
import SeparatorMountainBottom from '@/Components/SeparatorMountainBottom/SeparatorMountainBottom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
      <Header/>
      <Banner/>
      <SeparatorMountainBottom/>
    </>
  )
}
