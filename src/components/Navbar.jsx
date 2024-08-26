import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const toggleNavbar = () => setNavbarVisible(!navbarVisible);

  return (
    <nav>
      <div className="container">
        <a href="#"><img src={Logo} alt="logo" /></a>
        
        <div className='mobile-nav-menu'>
          <span className="bars-icon" onClick={toggleNavbar}><FaBars /></span>
          <ul className={`${navbarVisible ? 'showNavbar' : ''}`}>
            <span className='times-icon' onClick={toggleNavbar}><FaTimes /></span>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <ul className="desktop-nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar