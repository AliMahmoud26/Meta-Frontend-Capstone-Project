import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const toggleNavbar = () => setNavbarVisible(!navbarVisible);

  return (
    <nav>
      <div className="container">
        <Link to='/'><a href="#"><img src={Logo} alt="logo" /></a></Link>
        <div className='mobile-nav-menu'>
          <span className="bars-icon" onClick={toggleNavbar}><FaBars /></span>
          <ul className={`${navbarVisible ? 'showNavbar' : ''}`}>
            <span className='times-icon' onClick={toggleNavbar}><FaTimes /></span>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Services</li>
            <li>Menu</li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li>Order Online</li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <ul className="desktop-nav-menu">
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Services</li>
          <li>Menu</li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li>Order Online</li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
