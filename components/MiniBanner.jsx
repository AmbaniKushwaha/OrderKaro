import React, { useState } from 'react'

const MiniBanner = (props) => {
  return (
    
      <div className='h-50 w-[9%]'>
        <img className='h-full w-full  object-cover' src={props.banner.banner_image} alt="" />
      </div>     

  )
}

export default MiniBanner
