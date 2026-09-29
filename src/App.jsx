import React,{ useState } from 'react'
import './App.css'
import Nav from '../components/Nav.jsx'
import Banner from '../components/Banner.jsx'
import MiniBanner from '../components/MiniBanner.jsx'
import Footer from '../components/Footer.jsx'
import { data } from 'react-router-dom'
import Product from '../components/Product.jsx'
import products from './data.js'





function App() {
  const [minibanner, setMinibanner] = useState([
        {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png"
        },
        {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png"
        },
        {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png"
        },
        {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-4_9.png"
        },
        {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-5_4.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-6_5.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-7_3.png"
        },

         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-8_4.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2025-11/Slice-7-1_0.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-10.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-11.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-12.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-13.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-14.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-15.png"
        }, {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-16.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-17.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-18.png"
        },
         {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-19.png"
        }, {
            banner_image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-20.png"
        },
       

        
    ])

 
  


  return (
     <>
     {/* Nav */}
      <Nav/>

       {/* banner */}
      <div className='h-130 w-full  px-30 mt-21'>
        <Banner/>
      </div>

      { /*MiniBanner */}
      <div className='h-60vh w-full flex justify-center px-30 gap-3 flex-wrap'>
        {minibanner.map((value,)=>{
        return <MiniBanner banner = { value}/>
      })}
      </div>

       
       {/* catgories */}
       <div className='h-[430vh] w-full flex px-30 flex-wrap gap-5' >
         {products.map((value,idx)=>{
           return <Product data ={value} key={idx}/>
         })}
       </div>
        
       <div className='h-[70vh] w-full '>
        <Footer/>
       </div>

     </>
  )
}

export default App
