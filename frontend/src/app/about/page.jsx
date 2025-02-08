import React from 'react'
import Topnav from '../components/header/topnav/Topnav'
import Menu from '../components/header/menu/Menu'
import Partner from '../components/partner/Partner'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/section/Breadcrumb'
import header from '../../../public/header.webp'
import Aboutsection from '../components/section/Aboutsection'
import Counter from '../components/section/Counter'
import Service from '../components/service/Service'
import serviceData from '@/./app/data/service.json'

const Page = () => {
  return (
<div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    <main className='content'>
      <Breadcrumb link="about us" img={header} title="about us" desc="the jobs report soundly beat expectations , with job gains broadly spread across the economy and about 60% higher "/>
    <Aboutsection/>
    <Counter className="lg:pb-[50px] sm:pb-16 pb-10"/>
    <Service data={serviceData} className="pb-10"/>
    </main>
    <Partner className='lg:mt-[100px] sm:mt-16 mt-10'/>
    <footer id="footer">
      <Footer/>
    </footer>
    </div>
  )
}

export default Page
