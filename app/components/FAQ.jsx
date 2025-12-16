"use client"
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const FAQ = () => {

    const [show,setShow]=useState(false)

    const handleView =()=>{
        setShow(!show)
    }
    return (
        <div>
            <div className='text-black mt-10 w-8/12 p-3 '>
                <div onClick={handleView} className='flex justify-between cursor-pointer border rounded-md border-gray-200 text-center p-3  items-center'>
                    <h1 className='text-xl font-bold'>Frequently Asked Questions</h1>
                    <button className='cursor-pointer'>
                        {!show ? <FaAngleDown className='text-xl ' /> : <FaAngleUp className='text-xl ' />
                    }
                    </button>
                </div>
            {show && 
            <div className=' border rounded-md border-gray-200 p-3'>
                <div className='flex justify-between mt-3 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Is there an age restriction for the event?</p>
                    <p>We wouldn’t want anyone missing out on this amazing experience. A few things to keep in mind, though, children up to the age of 5 years can enter for free, but no seating may be provided for them. Children above that age will require a ticket. Due to the live band performance event, all parents/guardians are requested to bring their kids at their own discretion. If you are under the age of 16, you will need to be accompanied by an adult guardian.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Is there parking available?</p>
                    <p>Limited parking is available at the venue.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Can I get a refund if I can't attend the event?</p>
                    <p>Tickets for this event are non-refundable.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Are there accommodations for individuals with disabilities?</p>
                    <p>No, the venue is not wheelchair accessible</p>
                </div>
                
                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Is this a standing or a seated show?</p>
                    <p>The concert offers multiple ticket categories, granting entry to either a standing zone or a seated zone. Seating is available on a first-come, first-served basis.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Will photography or videography be allowed?</p>
                   <p> No professional photography/videography will be allowed at the concert.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Will food & beverages be available at the venue?</p>
                   <p>Yes, food and non-alcoholic beverage stalls will be available for purchase.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Can I re-enter the venue after leaving?</p>
                   <p>No, this is a single-entry event. Once you exit the show area, re-entry will not be permitted.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>What is the “Pay 50% and reserve”?</p>
                    <p>This service allows users to reserve their tickets and add-ons (if any) by paying 50% of the value at checkout. Users can pay the remainder balance by 14th February 2026, 11:59PM.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>What if I miss on my pending payment under the “Pay 50% and reserve”? Is my 50% reservation cost refundable?</p>
                    <p>No, the reservation cost is non-refundable. Payment of tickets and add-ons (if any) will be automatically forfeited if the user fails to complete the final payment.</p>
                </div>

                 <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Under what circumstances is my 50% reservation amount refundable under “Pay 50% and reserve”?</p>
                    <p>The cost is refundable only if the event is postponed or cancelled.</p>
                </div>

                <div className='flex justify-between mt-1 flex-col text-justify p-3 '>
                    <p className='font-semibold mb-2'>Will I get my confirmed tickets and add-on when I pay the 50% reservation amount?</p>
                    <p>No, you will receive the confirmation only when the entire payment has been successfully completed.</p>
                </div>


            </div>
            }



            </div>
        </div>
    )
}

export default FAQ
