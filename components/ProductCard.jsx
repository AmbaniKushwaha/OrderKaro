import React from 'react'

const ProductCard = (props) => {

  return (
    <>
        <div className='h-full w-[15%]'>
            <div className='h-[50%] w-full'><img className='h-full w-full object-cover p-3' src={props.product.img} alt="" /></div>
             <div className='h-[50%] w-full flex flex-col justify-evenly px-3'>
            <h3>{props.product.time}</h3>
            <h2>{props.product.title} </h2>
                <p>{props.product.quantity} </p>
                <div className='h-[25%] w-full flex justify-between'>
                    <h3>{props.product.price} </h3>
                    <button className='border border-green-400 text-green-400 rounded-md px-4 '>ADD</button>
                </div>
             </div>
        </div>
        
    </>
    
  )
}

export default ProductCard
