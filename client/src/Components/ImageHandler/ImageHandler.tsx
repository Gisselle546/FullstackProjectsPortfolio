import { Site } from '@/types/site'
import React from 'react'
import Image from 'next/image';
type Props ={
    site: Site
}

function ImageHandler({site}:Props) {
    const sliceimages = site.images.slice(-2)
  console.log(site);
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-auto">
                <div className="col-span-2">  
                <Image
                alt="Mountains"
                src={`${site.images[0]}`}
                height={700}
                className="w-full h-full object-cover"
                width={700}
                
                />
                </div>
                {
                    sliceimages.map((images:any)=>{
                        return(
                            <>
                                <div className="w-full h-auto">
                                <Image
                                alt="Mountains"
                                src={`${images}`}
                                height={700}
                                className="w-full h-full object-contain"
                                width={700}
                                />
                                </div>
                            </>
                        )
                    })
                }
                
                
            </div>
        </>
  )
}

export default ImageHandler