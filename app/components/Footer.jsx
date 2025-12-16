import Image from 'next/image'
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import Link from 'next/link'
import React from 'react'


const Footer = () => {



  return (
    <div className='bg-zinc-900  p-5 pt-10 pb-10 text-gray-200 justify-between  min-w-2xl'> 
    <div className='items-center flex justify-between font-semibold pt-5 pb-10'>
    <div className=''>
         <Image
          className=" ml-4 "
          src="/logo.svg"
          alt="Next.js logo"
          width={110}
          height={20}
          priority
          />
          </div>       

        <div className='items-center flex text-center justify-around'>
         <ul className='flex gap-10 '>

        <li className="">
          <Link href="/policies/terms-of-service">Terms & Conditions</Link>
        </li>
        
        <li className="">
          <Link href="/events">Privacy Policy</Link>
        </li>

        <li className="">
          <Link href="/booking">Contact Us</Link>
        </li>

        <li className="">
          <Link href="/checkout">List your events</Link>
        </li>
            </ul>
        </div>

        <div className='flex gap-2 items-center flex-col pr-5 '>
              <Image
          className=" rounded-lg"
          src="/qrcode.svg"
          alt="Next.js logo"
          width={90}
          height={20}
          priority
          />
           <p className='text-lg mt-0' >Scan to download the app</p>
        </div>


</div>
        <hr className='m-5' />
        <div className='w-full flex justify-between p-3 pb-0 '>

        <p className='text-md font-semibold text-gray-400'>By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
        <div className='flex gap-5 text-3xl'>
        <FaFacebook />
        <FaInstagram />
        <BsTwitterX />
        <AiOutlineYoutube />
        </div>
        </div>
      
    </div>
  )
}

export default Footer
