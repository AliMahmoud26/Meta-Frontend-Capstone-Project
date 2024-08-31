import React from 'react'
import { FaStar } from 'react-icons/fa'
import Testimonial1 from '../assets/testimonial1.jpg'
import Testimonial2 from '../assets/testimonial2.avif'
import Testimonial3 from '../assets/testimonial3.jpg'
import Testimonial4 from '../assets/testimonial4.jpg'

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <h1>Testimonials</h1>
        <div className="reviews-holder">
            <div className="review">
                <div className="content">
                    <img src={Testimonial1} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div>
            <div className="review">
            <div className="content">
                    <img src={Testimonial2} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div>
            <div className="review">
                <div className="content">
                    <img src={Testimonial3} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div>
            {/* <div className="review">
                <div className="content">
                    <img src={Testimonial4} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div>
            <div className="review">
                <div className="content">
                    <img src={Testimonial4} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div>
            <div className="review">
                <div className="content">
                    <img src={Testimonial4} alt="review img" />
                    <div className="text">
                        <h3>Name</h3>
                        <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse ut ex voluptatem accusantium assumenda, corrupti quibusdam dolorum! Maiores quas in laborum doloribus esse corporis sit cumque quam neque obcaecati.</p>
            </div> */}
        </div>
    </section>
  )
}

export default Testimonials