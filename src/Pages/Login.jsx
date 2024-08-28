import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login'>
        <h2>Welcome Back Again!</h2>
        <form method='post'>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
            </div>

            <input type="checkbox" name="checkbox" id="checkbox" /> Remember me

            <div className="submit">
                <input type="submit" value="Login" />
            </div>
        </form>
            <div className="create-account">
                <p>don't have an account?</p>
                <Link to='/register'><a href='#' className='link'>create account</a></Link>
            </div>
    </section>
  )
}

export default Login