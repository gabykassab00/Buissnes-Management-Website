import React from 'react'
import Topnav from '../../../../frontend/src/app/components/header/topnav/Topnav'
import Menu from '../components/header/menu/Menu'
import Partner from '../components/partner/Partner'
import Footer from '../components/footer/Footer'
import Breadcrumb from '../components/section/Breadcrumb'
import header from '../../../public/header.webp'
import blogData from '@/app/data/blog.json'
const Page = () => {
  return (
<div className="overflow-x-hidden">
    <header id="header">
      <Topnav/>
      <Menu/>
    </header>
    <main className='content'>
      <Breadcrumb link="Blog" img={header} title="Blog" />
        
    </main>
    <Partner className='lg:mt-[100px] sm:mt-16 mt-10'/>
    <footer id="footer">
      <Footer/>
    </footer>
    </div>
  )
}

export default Page
