import React from 'react'
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

function Header() {
  return (
    <div style={{paddingTop: "40px", paddingBottom: "40px", padding: "40px 100px" , backgroundColor: "rgb(27, 55, 100)"}} className="flex justify-between">
      <div style={{gap: "33px"}} className="logo flex items-center">
          <img src="./Logo.png"/>
        <div className="links flex">
          <ul style={{gap: "10px"}} className='flex'>
            <li style={{background: "white", display: "flex", justifyContent: "center", width: "45px", height: "45px", padding: "13px 0px"}}><img src="./fec.png"/></li>
            <li style={{background: "white", display: "flex", justifyContent: "center", width: "45px", height: "45px", padding: "13px 0px"}}><img src="./tvit.png"/></li>
            <li style={{background: "white", display: "flex", justifyContent: "center", width: "45px", height: "45px", padding: "13px 0px"}}><img src="./in.png"/></li>
          </ul>
        </div>
      </div>
      <div style={{gap: "30px"}} className="nav__link flex items-center">
        <ul style={{width: "469px", justifyContent: "space-between", color: "white"}} className='flex'>
          <Link href="/">
           <li>Home</li>
          </Link>
          <Link href="about">
           <li>About</li>          
          </Link>
          <Link href="/service">
            <li>Services</li>
          </Link>
          <Link href="/contact">
           <li>Contact</li>
          </Link>
        </ul>
        <button style={{padding: "13px 33px", backgroundColor: "rgb(255, 202, 66)", color: "rgb(27, 55, 100)", border: "none"}}>Order Today</button>
      </div>
    </div>
  )
}

export default Header
