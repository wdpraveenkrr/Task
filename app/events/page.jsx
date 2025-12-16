import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='w-11/12 h-screen  mx-auto text-black font-semibold flex justify-center' >
    <div className='flex justify-between border-black rounded-3xl shadow-2xl  absolute p-15 m-5 rounded-lgx w-10/12'>
    
      <div className='w-7/12 space-y-4 mt-10'>
        <p className='text-2xl'>Sat, 07 Mar, 6.30 PM</p>
        <h2 className='text-4xl'>Hip Hop Tamizha Aadhi's ROTDM - The Home Coming Finale | Chennai</h2>
        <p className='text-2xl'>YMCA Ground, Nandanam, Chennai</p>
        <p className='text-lg mb-8'>$999 onwards</p>
          <Link href={"/events/hiphop-adhi-live-in-concert-chennai-2026-buy-tickets"} className='bg-black text-white text-2xl font-semibold py-4 px-10 rounded-2xl mt-5' > Book tickets</Link>
      </div>
      <div className='5/12 '>
        <Image src={'/hiphop.png'} width={300} height={200} alt='event-pic' className='rounded-2xl shadow-2xl' />
      </div>
    </div>

    

    </div>
  )
}

export default page
