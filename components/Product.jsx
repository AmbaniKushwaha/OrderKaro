import React from 'react'
import ProductCard from './ProductCard'

const Product = (props) => {
  return (
    <div className='h-[60vh] w-full flex flex-col overflow-hidden'>
      <div className='h-[15%] w-full flex justify-between items-center'>
        <h3 className='text-2xl'>{props.data.title}</h3>
        <button className='px-[10px] py-[5] text-green-400 text-2xl'>See All..</button>
      </div>

      <div className="h-[85%] w-full flex overflow-x-auto flex-nowrap gap-4 
[&::-webkit-scrollbar]:hidden 
[-ms-overflow-style:none] 
[scrollbar-width:none]">

       <div className='h-[100%] w-[170%]  flex shrink-0 overflow-hidden '>
         {props.data.cards.map((value,idx)=>{
           return <ProductCard product={value} key={idx} />
        })}
        </div> 
       
      </div>
    </div>
  )
}

export default Product
