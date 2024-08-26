import React from 'react'
import HeroImg from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>We are a family owned mediterraneran restaurant, focused <br /> on traditional recipes served with a modern twist.</p>
          <button className='btn'>Reserve Table</button>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="hero-image" />
        </div>
    </section>
  )
}

export default Hero