import { useStore } from '@/context/sites';
import React, {useState, useCallback, useEffect} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Image from 'next/image';
import { useRouter } from 'next/router';

function Slider() {
    const {state, getSites} = useStore();
    const [index, setIndex] = useState(0);
    const router = useRouter();
 
    
    useEffect(() => {
        getSites();
      }, [getSites]);
    
      if (state.sites.length === 0) {
        return <div>Loading...</div>;
      }
    
      const nextSite = () => {
        setIndex((prevIndex) => (prevIndex + 1) % state.sites.length);
      };
    
      const prevSite = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? state.sites.length - 1 : prevIndex - 1));
      };
    
      const currentSite = state.sites[index];
    
    
    console.log(state);

    return (
        <div className='flex justify-around w-full sm:w-full my-20 h-auto sm:h-[25rem]'>
            <button onClick={prevSite}>
            <span className="inline-block align-middle mr-2  text-[rgb(25,25,112)]">
                <AiOutlineArrowLeft size={34} />
            </span>
        </button>
        <div className='flex flex-col items-center justify-evenly'>
            {/* Render your site information here */}
            <div className='h-full w-full'>
            <Image
            alt="Mountains"
            src={currentSite.images[0]}
            height={500}
            width={700}
            
            />
        </div>
            
        <span className='mt-5'>
            <h1 className='text-2xl text-[rgb(25,25,112)] capitalize cursor-pointer' onClick={()=>router.push('/explore')}>{currentSite.name}</h1>
            </span>
        </div>
        <button onClick={nextSite}>
        <span className="inline-block align-middle mr-2 text-xl text-[rgb(25,25,112)]">
            <AiOutlineArrowRight size={34}/>
            </span>
        </button> 
        </div>
    )
}

export default Slider