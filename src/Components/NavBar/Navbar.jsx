import React, { useEffect, useState } from 'react'
import "./NavBar.css"
// import logo from '../../src/assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [stikey, setStikey] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setStikey(true) : setStikey(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${stikey ? "dark-nav" :''
    }`}>
      <img src="src\assets\logo.png" alt="..."  className='logo'/>
      <ul className={mobileMenu ?"":"hide-mobile-menu"}>
        <li> Home</li>
      <li>Program</li>
      <li>About US</li>
      <li>Campus</li>
      <li>Testimonials</li>
      <li><button className='btn'> Contact US </button></li>
      </ul>
      <img src={menu_icon} alt="..." className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
