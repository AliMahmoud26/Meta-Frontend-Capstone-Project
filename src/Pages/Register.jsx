import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='register'>
        <h2>Sign Up</h2>
        <form method='post'>
            <div className="username">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Enter Your Username' required/>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
            </div>
            <div className="password">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder='Confirm Your Password' />
            </div>
            <div className="submit">
                <input type="submit" value="Sign Up" />
            </div>
        </form>
        <div className="login-account">
                <p>Have an account?</p>
                <Link to='/login'><a href='#' className='link'>login</a></Link>
            </div>
    </section>
  )
}

export default Register