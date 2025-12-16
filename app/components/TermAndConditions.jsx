"use client"
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const TermsAndConditions = () => {
    
        const [show,setShow]=useState(false)
    
        const handleView =()=>{
            setShow(!show)
        }
    return (
        <div>
            <div className='text-black mt-5 w-8/12 p-3 '>
                <div onClick={handleView} className='flex justify-between cursor-pointer border rounded-md border-gray-200 text-center p-3  items-center'>
                    <h1 className='text-xl font-bold'>Terms & Conditions</h1>
                    <button className='cursor-pointer'>
                        {!show ? <FaAngleDown className='text-xl ' /> : <FaAngleUp className='text-xl ' />}
                        </button>
                </div>
            {show && 
                 <div className=' border rounded-md border-gray-200 p-3' >
                    <ul className='list-disc pl-5 scroll-py-1 text-justify'>
                        <li className='py-1.5'>Please carry a valid ID proof along with you</li>
                        <li className='py-1.5'>No refunds on purchased ticket are possible, even in case of any rescheduling</li>
                        <li className='py-1.5'>Security procedures, including frisking remain the right of the management.</li>
                        <li className='py-1.5'>No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, lazer devices, bottles, musical instruments will be allowed in the venue and may be ejected with or without the owner from the venue</li>
                        <li className='py-1.5'>The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same would be settled in courts in Mumbai.</li>
                        <li className='py-1.5'>People in an inebriated state may not be allowed entry.</li>
                        <li className='py-1.5'>Organizers hold the right to deny late entry to the event.</li>
                        <li className='py-1.5'>Venue rules apply</li>
                        <li className='py-1.5'>The attendees will be able to reserve their tickets and any applicable add-ons (as communicated on the District platform) by paying a part of the total value of the tickets as a reservation amount at the time of checkout as displayed on the District platform. The remaining balance of the reservation amount (Reservation Amount) must be paid by 14th February 2026.</li>
                        <li className='py-1.5'>Tickets and applicable add-ons will be confirmed only once full payment is successfully received before 14th February 2026.</li>
                        <li className='py-1.5'>If an attendee fails to pay the remaining amount by the Balance Due Date, the Reservation Amount will be forfeited and will not be refunded. The reservation for the ticket will be cancelled.</li>
                        <li className='py-1.5'>In case the event is postponed or cancelled by the organiser prior to the Balance Due Date due to a force majeure event, the attendee shall be eligible for refund of the Reservation Amount. In case the event is postponed or cancelled by the organiser after the Balance Due Date, the attendee shall not be eligible for any refund</li>
                        <li className='py-1.5'>Tickets to the event or a particular category or any add-ons (if applicable) may appear as “Sold Out” on the District platform due to reservations made by other attendees. Such tickets to the event or a particular category or any add-ons (if applicable) may re-open and be listed for sale on the District platform at a price determined by the organiser in case any attendee fails to pay the remaining balance by the respective due date.</li>
                    </ul>
                </div>
            }



            </div>
        </div>
    )
}

export default TermsAndConditions
