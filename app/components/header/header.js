
"use client"
import headercss from './header.module.scss'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [sideMenu, setsideMenu] = useState(false);
  useEffect(()=> {
    // add overflow hidden for body tag
    if(sideMenu)
    document.body.style.overflow="hidden";
    else
    document.body.style.overflow="auto";
    document.body.style.overflowX="hidden";
}, [sideMenu])
  return (
    
      <div className={headercss.header}>
        <div className={headercss.logo}>
          {/* <Image className={headercss.logoimg} src="/images/logo.png" alt='headerimg'></Image> */}
          <Link href='/'>
          <img className={headercss.logoimg} src="/images/logo.png" loading="lazy"/>
          </Link>
        </div>
        <div className={`${headercss.navbar} ${sideMenu ? `${headercss.showMenu}` : ""}`}>
          <ul>
            <Link href="/" onClick={() =>setsideMenu(false)}><li>Home</li></Link>
            <Link href='/pages/tours' onClick={() =>setsideMenu(false)}><li>Packages</li></Link>
            <Link href="/pages/contactus" onClick={() =>setsideMenu(false)}><li>Contact Us</li></Link>
            
           
          </ul>
          <input type="button" className={headercss.btncall} value="Call +91-9958299985" />
        </div>
        <div className={headercss.hamburger} ><i className="fa fa-bars" onClick={(()=>setsideMenu(prev => !prev))}></i></div>
        <div className={`${headercss.overlay} ${sideMenu ? `${headercss.showOverlay}` : ""}`} onClick={() =>setsideMenu(false)}></div>
      </div>
   
  )
}