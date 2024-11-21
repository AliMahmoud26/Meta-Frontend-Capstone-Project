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
              <Link to='/'><li>Home</li></Link>
              <Link to='/restaurant-history'><li>About</li></Link>
              <Link to='/menu'><li>Menu</li></Link>
              <Link to='/bookings'><li>Bookings</li></Link>
              <Link to='/reservation'><li>Reservation</li></Link>
              <Link to='/orders'><li>Orders</li></Link>
              {isAuthenticated ? (
                <li onClick={handleLogout}>Logout</li>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
          </ul>
        </div>

        <ul className="desktop-nav-menu">
            <Link to='/'><li>Home</li></Link>
            <Link to='/restaurant-history'><li>About</li></Link>
            <Link to='/menu'><li>Menu</li></Link>
            <Link to='/bookings'><li>Bookings</li></Link>
            <Link to='/reservation'><li>Reservation</li></Link>
            <Link to='/orders'><li>Orders</li></Link>
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
