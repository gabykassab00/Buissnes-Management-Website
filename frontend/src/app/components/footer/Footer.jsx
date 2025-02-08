import Image from 'next/image'
import React from 'react'
import logowhite from './../../public/images/LogoWhite.png'
import Link from 'next/link'
import * as Icon from '@phosphor-icons/react/dist/ssr'

const Footer = () => {
  return (
    <div className='footer-block bg-[#0f1e33] pt-[60px]'>
      <div className='container'>
        <div className='flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10'>
        <div className='lg:w-1/4 '>
        <div className='footer-company-info flex flex-col justify-between gap-5'>
            <Image width={4000} height={4000} className='footer-logo w-[145px]' src={logowhite} alt='img'/>
            <div className='text caption1 text-white'>
                the jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher
            </div>

            <div className='list-social flex items-center gap-2 '>
                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://facebook.com' target='_blank'>
                <i className='icon-facebook text-xs'></i>
                </Link>

                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://linkedin.com' target='_blank'>
                <i className='icon-in text-xs'></i>
                </Link>

                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://twitter.com' target='_blank'>
                <i className='icon-twitter text-xs'></i>
                </Link>

                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://youtube.com' target='_blank'>
                <i className='icon-youtube text-xs'></i>
                </Link>
            </div>
        </div>

        </div>

        <div className='lg:w-1/2'>
        <div className='footer-navigate flex items-center justify-center gap-20'>
            <div className='footer-nav-item'>

            <div className='item-heading text-button-sm text-white'>
                Quick Links
            </div>
            <ul className='list-nav mt-1 text-white'>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        About us 
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Services
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Case Studies
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        contact
                    </Link>
                    
                </li>
            </ul>
            </div>

            <div className='footer-nav-item max-sm:hidden'>
            <div className='item-heading text-button-sm text-white'>
                Pages
            </div>
            <ul className='list-nav mt-1 text-white'>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        FAQs
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Pricing
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Partners
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Support Center
                    </Link>
                    
                </li>
            </ul>
            </div>
            <div className='footer-nav-item max-sm:hidden'>
            <div className='item-heading text-button-sm text-white'>
                Blog
            </div>
            <ul className='list-nav mt-1 text-white'>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                            Blog List
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Blog Grid
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Masonry
                    </Link>
                    
                </li>
                <li className='mt-3'>
                    <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                        Blog Detail
                    </Link>
                    
                </li>
            </ul>
            </div>
        </div>
        
        </div>

        <div className='lg:w-1/4'>
        <div className='company-contact'>
            <div className='heading text-button-sm text-white'>
                NewsLetter
            </div>
            <div className='mt-3 flex items-start'>
                <div className='text'>
                    <div className='caption2 text-surface text-white'>
                        Need Help? 24/7 
                    </div>
                    <div className='fw-700 text-white mt-1'>
                        566-888-181818
                    </div>
                </div>
            </div>
                <div className='locate mt-3 flex items-center '>
                    <div className='caption1 text-surface text-white'>
                        187 2th st, east chicago. USA
                    </div>
                </div>

                <form className='send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden'>
                <input className='caption1 text-secondary h-full w-full pr-4 pl-3' type='text' placeholder='Your Email Adress'/>
                <button className='flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0'>
                <Icon.PaperPlaneTilt className='text-white'/>
                </button>
                </form>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer