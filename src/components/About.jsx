import React from 'react'
import AboutImg1 from '../assets/restauranfood.jpg'
import AboutImg2 from '../assets/food1.avif'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about'>
      <div className="about-content">
        <div className="text">
          <h1>Little Lemon</h1>
          <span>Chicago</span>
          <p>Welcome to our family-owned Mediterranean restaurant, a place where tradition and innovation come together to create an unforgettable dining experience. Our story began with a simple yet profound dream: to share the rich heritage of Mediterranean cuisine with our community. Inspired by recipes passed down through generations, we’ve taken the flavors of our roots and infused them with a modern twist to appeal to today’s adventurous food lovers. From the very beginning, our focus has been on crafting dishes that reflect the warmth and authenticity of our culture...</p>
        </div>
        <div className="images">
          <img src={AboutImg1} alt="about-img" />
          <img src={AboutImg2} alt="about-img" />
        </div>
      </div>
    </section>
  )
}

export default About