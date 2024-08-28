import React from 'react'
import FooterLogo from '../assets/Logo.svg'

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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
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
    </footer>
  )
}

export default Footer