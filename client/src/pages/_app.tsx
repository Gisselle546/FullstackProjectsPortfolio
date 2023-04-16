
import '@/styles/globals.css'
import  {SiteProvider}  from '@/context/sites'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <>
   <SiteProvider>
      <Component {...pageProps} />
  </SiteProvider>
  </>
  )
}
