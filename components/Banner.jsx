import React from 'react'

const Banner = () => {


  return (
<>
<div className='h-70 w-full  '>
      <img className='h-full w-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg" alt="" />
</div>
<div className='h-60 w-full flex justify-start items-center  gap-6  p-4'>
      <div className='h-full w-[26%] rounded-2xl  '>
        <img className='h-full w-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
      </div>
      <div className='h-full w-[26%] rounded-2xl '>
        <img className='h-full w-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png" alt="" />
      </div>
      <div className='h-full w-[26%] rounded-2xl '>
        <img className='h-full w-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png" alt="" />
      </div>
</div>

</>
    
  )
}

export default Banner
