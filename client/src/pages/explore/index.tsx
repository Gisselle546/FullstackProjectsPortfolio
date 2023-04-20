import PageTemplate from '@/PageTemplate/PageTemplate'
import React, { useEffect } from 'react';
import { useStore } from '@/context/sites';
import { Site } from '@/types/site';
import ImageHandler from '@/Components/ImageHandler/ImageHandler';


function Explore() {
  const {state, getSites} = useStore()
        
  useEffect(() => {
    getSites();
  }, [getSites]);

  if (state.sites.length === 0) {
    return <div>Loading...</div>;
  }

  const handleClick = (data: string) =>{

    window.location.href=data;
  }

  return (
    <PageTemplate>
      <div className='flex justify-evenly items-center flex-col p-4 space-y-10 border border-solid bg-white'>
        <h2 className='text-4xl lg:text-5xl capitalize text-[rgb(25,25,112)] p-3 m-4'>Showcase</h2>
          {
            state.sites.map((site: Site)=>{
              return(
                <>
                  <div className='flex flex-col sm:flex-row justify-between p-4 bg-gray-100 w-full md:w-3/4 rounded-lg h-1/4'>
                    <div className='w-full md:w-3/4 h-auto'>
                      <ImageHandler site={site}/>
                    </div>
                    <div className='flex flex-col sm:w-full md:w-1/2 items-center justify-evenly h-[40rem] border border-blue'>
                      <h1 className='text-lg md:text-2xl capitalize text-[rgb(25,25,112)]'>{site.name}</h1>
                      <p className='text-md md:text-lg text-[rgb(25,25,112)] w-3/4'>{site.description}</p>
                      <div className='flex justify-evenly w-full md:w-3/4'>
                        <button className="bg-gradient-to-r from-[rgb(48,37,95)] to-[rgb(187,214,253)] capitalize text-white font-bold py-2 px-4 rounded-r" onClick={()=>{handleClick(site.url) }}>
                          experience it
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
      </div>
    </PageTemplate>
    
  )
}

export default Explore