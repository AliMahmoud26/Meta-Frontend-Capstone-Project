import React from 'react'
import GreelSalad from '../assets/greek salad.jpg'
import Bruchetta from '../assets/bruchetta.svg'
import LemonDessert from '../assets/desert.jpg'

const Dishes = () => {
  return (
    <section className='dishes'>
            <div className="dishes-header">
                <h1>This weeks specials!</h1>
                <button className='btn'>Online Menu</button>
            </div>
        <div className="container">
            <div className="our-dishes">
                <div className="dish">
                    <img style={{height: '230px'}} src={GreelSalad} alt="dish 1" />
                    <div className="content">
                        <div className="dish-header">
                            <h4>Greek Salad</h4>
                            <span>$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style fota cheese, garnished with crunchy garlic and rosemary croutons</p>
                        <button className='btn'>Order Now</button>
                    </div>
                </div>
                <div className="dish">
                    <img src={Bruchetta} alt="dish 2" />
                    <div className="content">
                        <div className="dish-header">
                            <h4>Bruchetta</h4>
                            <span>$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className='btn'>Order Now</button>
                    </div>
                </div>
                <div className="dish">
                    <img style={{height: '235px'}} src={LemonDessert} alt="dish 3" />
                    <div className="content">
                        <div className="dish-header">
                            <h4>Lemon Dessert</h4>
                            <span>$4.78</span>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className='btn'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dishes