import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save user data to local storage
    const userInfo = { username, email, password };
    localStorage.setItem('user', JSON.stringify(userInfo));

    // Update authentication state
    setIsAuthenticated(true);

    // Redirect to the homepage after successful registration
    navigate('/');
  };

  return (
    <section className='register'>
      <h2>Sign Up</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Enter Your Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter Your Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
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
            required 
          />
        </div>
        <div className="password">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder='Confirm Your Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="submit">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <div className="login-account">
        <p>Have an account?</p>
        <a href='/login' className='link'>Login</a>
      </div>
    </section>
  );
};

export default Register;
