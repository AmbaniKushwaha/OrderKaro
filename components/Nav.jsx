import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/blinkitlogo.png'

const Navbar = () => {
    return (
        <>
            <div  className='w-full h-21  flex fixed top-0 bg-white'>
                
                <div className='w-[12%]  h-full flex items-center border border-gray-200'>
                    <Link to="/">
                    <img className='object-cover w-full h-full cursor-pointer' src={logo} alt="" />
                     </Link>
                </div>
               

                <div className='w-[88%] h-full flex items-center justify-evenly border border-gray-200 '>
                    <div className='w-[20%]  h-full flex items-center justify-center flex-col  '>
                    <h2 className='font-bold '>Delivery in 17 minutes</h2>
                    <p className='text-m '>B62, Pocket B, South City I, Sector...</p>
                </div >

                <div className='w-[50%]  flex items-center justify-center '>
                <input type="text"  placeholder='Search Item' className='bg-black/5 border border-black/5 w-[90%] h-12 pl-5 rounded-xl'/>
                </div>
                <div className=' flex items-center justify-start gap-5.5 w-[18%] font-semibold '>
                    <button className='bg-white px-5 py-2.5 rounded-xl'>Login</button>
                   <Link to="/cart">
                    <button className='bg-black text-amber-50 px-5 py-3.5 rounded-xl cursor-pointer'>My Card</button>
                    </Link>
                </div>

                </div>
            </div>
        </>
    )
}



export default Navbar