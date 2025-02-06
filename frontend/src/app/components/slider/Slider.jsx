"use client";
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay,Navigation,Pagination} from 'swiper/modules'
import * as Icon from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import one from './../../public/images/slider/one.jpg'
const Slider = () => {
  return (
    <>
    <div className='slider-block'>
        <div className='prev-arrow items-center justify-center '>
            <Icon.CaretLeft className='text-white heading6' weight='bold'/>
        </div>

        <div className='slider-main '>
            <Swiper spaceBetween={0} slidesPerView={1} navigation={{prevEl:'.prev-arrow',nextEl:'.next-arrow'}} loop={true} pagination={{clickable:true}} speed={400} modules={[Pagination,Autoplay,Navigation]} className='h-full relative' autoplay={{delay:4000}}>
                <SwiperSlide>

                <div className='slider-item slider-first'>
                    <div className='bg-img'>
                        <Image src={one} width={4000} height={3000} alt='slider1' priority={true} className='w-full h-full object-cover'></Image>
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </div>
        <div className='next-arrow items-center justify-center '>
            <Icon.CaretRight className='text-white heading6' weight='bold'/>
        </div>
    </div>
      </>
  )
}

export default Slider
