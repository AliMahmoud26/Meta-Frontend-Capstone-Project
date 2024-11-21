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
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.......<Link to='/restaurant-history'><a href="#" className='history-link'>More</a></Link></p>
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