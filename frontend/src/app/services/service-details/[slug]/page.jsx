import React from 'react'
import Topnav from '../../../components/header/topnav/Topnav'
import Menu from '../../../components/header/menu/Menu'
import Partner from '../../../components/partner/Partner'
import Footer from '../../../components/footer/Footer'
import Breadcrumb from '../../../components/section/Breadcrumb'
import header from '../../../../../public/header.webp'
import serviceData from '@/./app/data/service.json'
import Image from 'next/image'
import detail from '../../../public/images/bottom-slider-three.webp'
const Page = () => {
  return (
<div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    <main className='content'>
      <Breadcrumb link="our services details" img={header} title="our services details" desc="the jobs report soundly beat expectations , with job gains broadly spread across the economy and about 60% higher "/>
    
        <div className='content-detail-block lg:py-[100px] sm:py-16 py-10'>
            <div className='container'>
                <div className='flex max-xl:flex-col gap-y-8'>
                    <div className='w-full xl:pr-[80px]'>
                        <div className='heading3'>
                            Cryptocurrency Trading
                        </div>
                        <div className='bg-img mt-5 mb-5'>
                            <Image width={5000} height={5000} className='w-full h-full rounded-xl' src={detail} alt='img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Partner className='lg:mt-[100px] sm:mt-16 mt-10'/>
    <footer id="footer">
      <Footer/>
    </footer>
    </div>
  )
}

export default Page
