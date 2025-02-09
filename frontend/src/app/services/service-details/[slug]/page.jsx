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
import Link from 'next/link'
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
                    <div className='w-full xl:w-3/4'>
                    <div className='w-full xl:pr-[80px]'>
                        <div className='heading3'>
                            Cryptocurrency Trading
                        </div>
                        <div className='bg-img mt-5 mb-5'>
                            <Image width={5000} height={5000} className='w-full h-full rounded-xl' src={detail} alt='img'/>
                        </div>

                        <div className='body2 text-secondary mt-4'>
                        Cryptocurrency trading involves buying and selling digital currencies like Bitcoin or Ethereum to make a profit. It is important to research and understands market trends before starting. Traders use tools and charts to predict price movements and make informed decisions. While trading can be profitable, it also carries risks due to market volatility. Always start with a clear plan and only invest what you can afford to lose.
                        </div>
                    </div>
                    </div>

                    <div className='w-full xl:w-1/4 '>
                    <div className='more-infor border border-line rounded-xl py-8 px-8'>
                        <div className='heading7 '>
                            The best of our services
                        </div>
                        <div className='body3 text-secondary mt-2'>
                            Lorem Ipsum Passages , and more recently with desktop 
                        </div>

                        <div className='list-nav mt-4'>
                            <Link className='nav-item rounded-lg flex-between p-12' href='/'>
                                <div className='text-button text-secondary'>
                                    Payment solution
                                </div>
                            </Link>
                            <Link className='nav-item rounded-lg flex-between p-12' href='/'>
                                <div className='text-button text-secondary'>
                                    financial planning
                                </div>
                            </Link>
                            <Link className='nav-item rounded-lg flex-between p-12' href='/'>
                                <div className='text-button text-secondary'>
                                    online banking 
                                </div>
                            </Link>
                            <Link className='nav-item rounded-lg flex-between p-12' href='/'>
                                <div className='text-button text-secondary'>
                                    personal finance
                                </div>
                            </Link>
                        </div>
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
