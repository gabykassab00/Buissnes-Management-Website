import Image from 'next/image'
import React from 'react'

const Breadcrumb = ({link,img,title,desc}) => {
  return (
    <div className='breadcrumb-block w-full lg:h-[280px] sm:h-[300px] h-[320px] relative '>
        <div className='bg-img w-full h-full absolute top-0 left-0 z-[-1]'>
            <Image src={img} width={4000} height={3000} alt="banner" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Breadcrumb
