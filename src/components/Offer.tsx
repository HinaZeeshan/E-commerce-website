"use client"

import React from 'react'

interface IOffer{
  title:string,
  description:string
}

const  Offers = () => {
  const offer :IOffer[] =[
    {
      title:"HAPPY HOURS",
      description:"4pm se 6pm tk tmam cakes pe 50% OFF hasil karen"
    },
    {
      title:"HI-TEA PARTY",
      description:"7pm se 9pm main 2 pound , 2 cakes order karen ,1 cake free hasil karen"
    },
    {
      title:"Family HOURS",
      description:"9pm se 11pm tk free complimentary drinks hasil karen" 
    },
    {
      title:"MID-NIGHT-DEAL   ",
      description:"12am se 2am tk free complimentary cake har deal k sath hasil karen" 
    },
  ];
const handleofferClick = (description:string) =>{
  alert(description);
}



  return (
    <div className='py-28 '>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-10 text-pink-900 capitalize '>
SpecialOffer's
        </h2>
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
{
  offer.map((offer,index)=>(
    <button key={index} onClick={() => handleofferClick(offer.description)} 
    className='bg-white p-4 shadow-lg rounded-lg text-center hover:bg-amber-500 transition duration-300 transform hover:scale-105'>
<h3 className='text-2xl font-semibold text-violet-800'>{offer.title}</h3>
   <p className='mt-3 text-pink-900'>{offer.description}</p>
    </button>
  ))
}
</div>
      </div>
      
    </div>
  )
}

export default  Offers
