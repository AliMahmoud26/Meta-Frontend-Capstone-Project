import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user info is stored in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  const toggleNavbar = () => setNavbarVisible(!navbarVisible);

  const handleLogout = () => {
    // Remove user info from storage
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav>
      <div className="container">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        
        <div className='mobile-nav-menu'>
          <span className="bars-icon" onClick={toggleNavbar}><FaBars /></span>
          <ul className={`${navbarVisible ? 'showNavbar' : ''}`}>
            <span className='times-icon' onClick={toggleNavbar}><FaTimes /></span>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            {isAuthenticated ? (
              <li onClick={handleLogout}>Logout</li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>

        <ul className="desktop-nav-menu">
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Services</li>
          <li>Menu</li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li>Order Online</li>
          {isAuthenticated ? (
            <li onClick={handleLogout}>Logout</li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
