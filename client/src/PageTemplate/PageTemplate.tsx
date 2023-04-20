import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import HomeHeader from '@/Components/HomeHeader/HomeHeader'
import React from 'react'

type PageTemplateProps = {
    type?: 'default' | 'homepage'
    children: any
}



function PageTemplate({type='default', children}: PageTemplateProps) {
    switch(type){
        case 'homepage':
            return(
                <>
                 <HomeHeader/>
                    <div className="min-h-screen h-auto pt-20 pb-24 sm:pb-32">
                        {children}
                    </div>
                <Footer/>
                </>
            )
      }
      return(
        <>
         <Header/>
                    <div>
                        {children}
                    </div>
         <Footer/>
        </>
      )
}

export default PageTemplate