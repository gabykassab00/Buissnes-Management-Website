import Link from 'next/link'
import React from 'react'

const BlogList = ({data}) => {
  
  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>

      <div className='container'>
        <div className='flex max-lg:flex-col gap-y-10'>
          <div className='w-full lg:w-2/3'>
            <div className='list flex flex-col gap-y-10'>
              {

                data.slice(0,5).map((item,index)=>(
                    <Link className='blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5' href="/">
                        
                    </Link>
                ))
              }
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList
