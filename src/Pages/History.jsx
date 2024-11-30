import React from 'react'
import About from '../components/About'
import gallery_first from '../assets/restauranfood.jpg'
import gallery_last from '../assets/food1.avif'
import gallery_1 from '../../public/assets/restaurant-1.jpg'
import gallery_3 from '../../public/assets/restaurant-3.jpg'
import gallery_4 from '../../public/assets/restaurant-4.jpg'
import gallery_8 from '../../public/assets/restaurant-8.jpg'
import gallery_9 from '../../public/assets/restaurant-9.jpg'
import gallery_10 from '../../public/assets/restaurant-10.jpg'
import gallery_16 from '../../public/assets/restaurant-16.jpg'
import gallery_17 from '../../public/assets/restaurant-17.jpg'

const History = () => {
  return (
    <section className='history'>
        <div className="about-content">
            <About />
        </div>

        <div className="our-story">
            <h2>Our Story</h2>
            <p>Welcome to our family-owned Mediterranean restaurant, a place where tradition and innovation come together to create an unforgettable dining experience. Our story began with a simple yet profound dream: to share the rich heritage of Mediterranean cuisine with our community. Inspired by recipes passed down through generations, we’ve taken the flavors of our roots and infused them with a modern twist to appeal to today’s adventurous food lovers. From the very beginning, our focus has been on crafting dishes that reflect the warmth and authenticity of our culture. Every plate tells a story—of fresh, handpicked ingredients, bold flavors, and the timeless art of Mediterranean cooking. While we remain deeply connected to our culinary traditions, we embrace creativity to give each dish a contemporary flair that excites the senses. Our restaurant is more than just a place to eat; it’s a gathering space for friends and family to share moments of joy and connection. Whether it’s a casual meal, a special celebration, or simply a desire to explore the tastes of the Mediterranean, we are here to welcome you with open arms. Over the years, our journey has been guided by passion, hard work, and the unwavering support of our guests. As we continue to grow, we remain committed to providing exceptional food, heartfelt service, and an atmosphere that feels like home. Thank you for being part of our story—we look forward to sharing many more meals and memories with you.</p>
        </div>

        <div className="gallery">
            <div className="image-col col_1">
                <img src={gallery_first} width={350} alt="Image_COL-1 First_image" />
                <img src={gallery_8} width={350} alt="Image_COL-1 First_image" />
            </div>
            <div className="image-col col_2">
                <img src={gallery_1} width={379} alt="Image_COL-2 First_image" />
                <img src={gallery_10} width={379} alt="Image_COL-2 First_image" />
                <img src={gallery_3} width={379} alt="Image_COL-2 First_image" />
            </div>
            <div className="image-col col_3">
                <img src={gallery_4} width={379} alt="Image_COL-3 First_image" />
                <img src={gallery_17} width={379} alt="Image_COL-3 First_image" />
                <img src={gallery_9} width={379} alt="Image_COl_3 Last_image" />
            </div>
            <div className="image-col col_4">
                <img src={gallery_last} width={350} alt="Image_COl_4 Last_image" />
                <img src={gallery_16} width={350} alt="Image_COL-4 First_image" />
            </div>
        </div>
    </section>
  )
}

export default History