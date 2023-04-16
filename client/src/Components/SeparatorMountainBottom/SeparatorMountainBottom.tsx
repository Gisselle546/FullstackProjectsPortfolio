import React from 'react'

function SeparatorMountainBottom() {
  return (
   <>
    <div className="relative w-full h-40 mt-[-160px] hidden lg:block">
      <div className="absolute bottom-0 w-full" style={{ backgroundImage: "url('/mountain-bottom.svg')", backgroundSize: 'contain', height: '100%', width: '100%' }}></div>
    </div>
  </>
   
  )
}

export default SeparatorMountainBottom