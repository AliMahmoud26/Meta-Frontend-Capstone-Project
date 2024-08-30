import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic (e.g., API call, form validation, etc.)
    const userInfo = { email, password };

    // If "Remember me" is checked, save to local storage
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(userInfo));
    } else {
      sessionStorage.setItem('user', JSON.stringify(userInfo));
    }

    // Update authentication state
    setIsAuthenticated(true);

    // Redirect to the homepage after login
    navigate('/');
  };

  return (
    <section className='login'>
      <h2>Welcome Back Again!</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        /> Remember me

        <div className="submit">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="create-account">
        <p>Don't have an account?</p>
        <Link to='/register' className='link'>Create account</Link>
      </div>
    </section>
  );
}

export default Login;
