import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogitem = ({data}) => {
  return (
    <div className='blog-item'>
        <Link className='blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500' href='/'>
        <div className='bg-img w-full overflow-hidden'>
            <Image width={5000} height={5000} className='w-full h-full block' src={data.img} alt={data.title}  />

        </div>

        <div className='infor sm:p-6 p-4'>
            <div className='caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-blue-100'>
                {data.category} 
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Blogitem
