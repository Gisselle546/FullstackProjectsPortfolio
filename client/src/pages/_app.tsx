
import '@/styles/globals.css'
import  {SiteProvider}  from '@/context/sites'
import type { AppProps } from 'next/app'
import { MessageProvider } from '@/context/messages'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <>
    <SiteProvider>
      <MessageProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </MessageProvider>
    </SiteProvider>
  </>
  )
}
