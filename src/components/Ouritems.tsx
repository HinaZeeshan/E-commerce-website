import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from "react-icons/fa";


const Ouritems = () => {
const itemImages =[
    "/images/Capture.PNG",
     "/images/strawberry cake.jpg",
    "/images/vecteezy_decadent-chocolate-cake-with-mango-slices-and-mint-garnish_49512363.jpg",
    "/images/vecteezy_juicy-brownies-homemade-brownies-cake-cookies-with_28823695.jpeg",
    "/images/whitefull chocolate.jpg",
    "/images/vecteezy_strawberry-cream-cake-homemade-bakery-concept_9298862.jpg",
  
   
]

  return (
    <div className='relative text-center p-10'>
      <div className='absolute inset-0' style={{
        backgroundImage:`url('/images/cake-7749792_640.jpg')`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      zIndex:0,
      opacity:0.1,
      }}/>
<h1 className='font-bold text-4xl mb-4 text-violet-800  z-10 relative uppercase'>most requested item</h1>
    <h1 className='text-3xl text-violet-800 relative'>OrderNow..!</h1>
    <section
    id='projects'
    className='w-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'
    >
{Array.from({length:6}).map((_,index)=>(
    <div
    key={index}
    className='w-72 bg-pink-900 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative '>
      <Link href="#">
      <Image 
      src={itemImages[index]}
      alt = {`item $[index-1] `}
    
      width={500}
      height={500}
      className='h-80 w-72 object-cover rounded-t-xl '/>
<div className='px-4 py-3 w-72'>
  <span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
  <p className='text-lg font-bold text-white trauncate block capitalize; '> Creamy Cakes {index+1}</p>
<div className='flex items-center '>
<p className='text-lg font-semibold text-white my-3 cursor-auto' >$200</p>
<del>
  <br/>
  <p className='text-sm text-slate-500 cursor-auto ml-2 '>{""} $300</p>
</del>
<div className='ml-auto'>
<FaCartPlus className='w-5 h-5 text-white'/>
</div>
</div>
</div>
  
      </Link>

    </div>
))}
    </section>
    
    
    </div>
  )
}

export default Ouritems
