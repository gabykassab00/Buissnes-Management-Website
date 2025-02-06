"use client";
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image';
import gateway1 from './../../public/images/gateway1.webp'
const Payment = () => {
    
    const ref = useRef(null)
    const isInview = useInView(ref,{once:true})


  return (
    <div>
        <section className='payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative bg-slate-300'>
            <div className='bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0'>
            <Image src={gateway1} width={5000} height={5000} alt='img' className='w-full h-full object-cover'></Image>
            </div>
            <div className='container w-full lg:py-[150px] pt-14 py-16'>
                <div className='w-full flex items-center lg:justify-end' ref={ref} >
                    <div className='payment-info lg:w-1/2 xl:pl-20 lg:pl-10'style={{transform:isInview ? "none" : 'translateY(60px)', opacity:isInview?1:0,transition:'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s' }}>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Payment
