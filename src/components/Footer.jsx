import React from 'react'
import FooterLogo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-desc">
          <img src={FooterLogo} alt="footer logo" />
          <p>We are a family owned mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="link important-links">
          <h2 className="header">Important Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Services</li>
            <li>Menu</li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li>Order Online</li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="link contact">
          <h2 className="header">Contact</h2>
          <div className="details">
            <div className="detail">
              <p>Address:</p>
              <p>123 Town Street, Chicago</p>
            </div>
            <div className="detail">
              <p>Phone:</p>
              <p>+00 123 456 789</p>
            </div>
            <div className="detail">
              <p>Email</p>
              <p>little@lemon.com</p>
            </div>
          </div>
        </div>
        <div className="link socials">
          <h2 className="header">Social Media Links</h2>
          <div className="social-links">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <p className='right'>Copyright &copy; <a href="https://github.com/AliMahmoud26" target='_blank'>Ali Mahmoud</a> 2024, All Rights Reserved</p>
    </footer>
  )
}

export default Footer