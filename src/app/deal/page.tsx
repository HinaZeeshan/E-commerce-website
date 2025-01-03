import Dualdeal from '@/components/Dualdeal'
import Offers from '@/components/Offer'
import Ouritems from '@/components/Ouritems'
import React from 'react'

const page = () => {
  return (
    <div className='bg-zinc-400'>
      <Ouritems/>
      <Offers/>
      <Dualdeal/>
    </div>
  )
}

export default page
