'use client'
import React, { useState } from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { PiChairFill } from "react-icons/pi";

export default function page () {

  const totalSeats = 40;
  const[selectedSeats, setSelectedSeats]=useState([]);
  const toggleSeat =(seat)=>{
    setSelectedSeats((prev)=>prev.includes(seat)?prev.filter((s)=>s !== seat):[...prev,seat])

  }
  return (
    <>
    <div className='text-black flex flex-col justify-center items-center mx-auto '>

       <div className='w-full items-center flex mx-auto justify-center p-5'>
        <div className='font-semibold flex gap-5 items-center text-center'>
          <p className='flex '> <IoFilterSharp className='text-xl mr-3' />Filter stands by</p>
          <p className='border-gray-200  border-2 rounded-lg px-3 py-1 cursor-pointer'>$ 999</p>
          <p className='border-gray-200  border-2  rounded-lg px-3 py-1 cursor-pointer'>$ 1499</p>
          <p className='border-gray-200  border-2  rounded-lg px-3 py-1 cursor-pointer'>$ 1999</p>
          <p className='border-gray-200  border-2  rounded-lg px-3 py-1 cursor-pointer'>$ 2999</p>
          <p className='border-gray-200  border-2  rounded-lg px-3 py-1 cursor-pointer'>$ 3999</p>
          <p className='border-gray-200  border-2  rounded-lg px-3 py-1 cursor-pointer'>$ 9999</p>
        </div>
      </div>
      
      <div className=" border-2 mt-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400" >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:10}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>

      <div className=' border-2 mt-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400' >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:20}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>
     
    <div className=' border-2 mt-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400' >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:20}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>

    <div className=' border-2 mt-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400' >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:30}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>

    <div className=' border-2 mt-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400' >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:30}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>

   <div className=' border-2 m-10 flex flex-col items-center justify-center rounded-2xl bg-gray-400' >      
    
      <div className=' p-5  grid grid-cols-10 gap-5'>

        {Array.from({length:totalSeats}, (_,index)=>{
          const seatNumber = index+1;
          const isSelected = selectedSeats.includes(seatNumber);
          return(
            <button  key={seatNumber} onClick={()=>toggleSeat(seatNumber)}
              className={`w-8 h-8 text-sm font-semibold cursor-pointer rounded items-center flex justify-center ${isSelected? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            > <PiChairFill className='text-xl' /></button>
          )
        })}
 
      </div>

      </div>
 
 
     
    </div>
    </>
  )
}


