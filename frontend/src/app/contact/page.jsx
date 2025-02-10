import React from 'react'
import Topnav from '../components/header/topnav/Topnav'
import Menu from '../components/header/menu/Menu'
import Partner from '../components/partner/Partner'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/section/Breadcrumb'
import header from '../../../public/header.webp'
import Image from 'next/image'
import * as Icon from '@phosphor-icons/react/dist/ssr'

const Page = () => {
  return (
<div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    <main className='content'>
      <Breadcrumb link="contact-us" img={header} title="contact us" desc="the jobs report soundly beat expectations , with job gains broadly spread across the economy and about 60% higher "/>

            <div className='form-contact lg:py-[100px] sm:py-16 py-10'>
                <div className='container flex items-center justify-center'>
                    <div className='xm:w-5/6 w-full flex max-lg:flex-col xl:items-center gap-y-8'>
                        <div className='w-full xl:w-2/5'>
                        <div className='infor bg-blue-500 rounded-xl p-10'>

                            <div className='heading5 text-white'>Get in touch</div>

                            <div className='body3 text-white mt-2 '>
                                we will get back to you soon
                            </div>

                            <div className='list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6'>
                                <a   className="item rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center"
                                        href="https://facebook.com"
                                        target="_blank">
                                    <i className="icon-facebook text-black"></i>
                                </a>

                                <a   className="item rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center"
                                        href="https://facebook.com"
                                        target="_blank">
                                    <i className="icon-in text-black"></i>
                                </a>

                                <a   className="item rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center"
                                        href="https://facebook.com"
                                        target="_blank">
                                    <i className="icon-twitter text-black"></i>
                                </a>

                                <a   className="item rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center"
                                        href="https://facebook.com"
                                        target="_blank">
                                    <i className="icon-youtube text-black"></i>
                                </a>
                            </div>

                            <div className='list-more-info md:mt-10 mt-6'>
                                <div className='item flex items-center gap-3'>
                                    <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0'>
                                    <Icon.Clock weight='bold' className='text-blue text-2xl '/>
                                    </div>

                                    <div className='line-y'></div>
                                    <div className='text-button normal-case text-white'>8AM - 6PM</div>
                                </div>

                                <div className='item flex items-center gap-3 mt-5'>
                                    <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0'>
                                    <Icon.Phone weight='bold' className='text-blue text-2xl '/>
                                    </div>

                                    <div className='line-y'></div>
                                    <div className='text-button normal-case text-white'>454-454-554</div>
                                </div>

                                <div className='item flex items-center gap-3 mt-5'>
                                    <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0'>
                                    <Icon.EnvelopeSimple weight='bold' className='text-blue text-2xl '/>
                                    </div>

                                    <div className='line-y'></div>
                                    <div className='text-button normal-case text-white'>support@easylernig.com</div>
                                </div>

                                <div className='item flex items-center gap-3 mt-5'>
                                    <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0'>
                                    <Icon.MapPin weight='bold' className='text-blue text-2xl '/>
                                    </div>

                                    <div className='line-y'></div>
                                    <div className='text-button normal-case text-white'>57 r, saudi-arabia</div>
                                </div>

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
