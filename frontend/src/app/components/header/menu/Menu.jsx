"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import logo from './../../../public/images/logo.png'
const Menu = () => {

    const [fixedHeader,setFixedHeader] = useState(false)

  return (
<>
<div className={`header-menu bg-white ${fixedHeader ? "fixed" : ''} ` }>

<div className='container flex items-center justify-between h-20'>
    <Link className='menu-left-block' href="/">
        <Image src={logo} width={2000} height={1000} alt='logo' priority={true} className='w-[149px] max-sm:w-[132px]' />
    </Link>
</div>
</div>
</>
)
}

export default Menu
