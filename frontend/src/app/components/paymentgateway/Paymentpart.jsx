"use client";
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image';
import gateway2 from './../../public/images/gateway2-bg.webp'
import avatar3 from './../../public/images/avatar3.webp'
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr'
import dot from './../../public/images/component/gateway1-dot.png'

const Paymentpart = () => {
        const ref = useRef(null)
        const isInview = useInView(ref,{once:true})
    
  return (
    <div>
      <section className='payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10' ref={ref}>

        <div className='container'>
            <div className='content flex items-center gap-8'>
                <div className='w-full xl:w-5/12 flex flex-col gap-y-6'>

                    <h3 className='heading4'>
                        Payment Gateway Services
                    </h3>
                    <div className='body3 text-secondary'>
                            we provide reliable and secure payment gayteway services for buissnes of all sizes with our cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all over the world
                        </div>

                        <div className='button block'>
                        <Link className='button-main box-shadow bg-black hover:bg-black text-white bg-blue whitespace-nowrap rounded-full' href='/'>
                        Get Started 
                        </Link>
                        </div>

                </div>

                <div className='w-11/12 xl:w-7/12'>
                <div className='right pl-10' style={{transform:isInview ? "none" : 'translateY(60px)', opacity:isInview?1:0,transition:'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s' }}>
                    <div className='bg-img '>
                        <Image width={5000} height={5000} className='w-full' src={gateway2} alt='image'/>
                    </div>
                    <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                        <i className='icon-list text-2xl  p-4 rounded-2xl bg-red-400'></i>
                        <div className='text'>
                            <div className='heading7'>2K+</div>
                            <div className='heading 7 text-secondary'>Projects</div>
                        </div>
                    </div>

                    <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                        <Icon.Star weight='fill' className='text-yellow-600 text-3xl'/> 
                        <div className='text'>
                            <div className='heading7'>4.8</div>
                            <div className='heading7'>Satisfaction</div>

                        </div>
                    </div>


                    <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                        <i className='icon-user text-2xl  p-4 rounded-2xl bg-red-800'></i>
                        <div className='text'>
                            <div className='heading7'>6 Years</div>
                            <div className='heading 7 text-secondary'>Product Designer</div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Paymentpart
