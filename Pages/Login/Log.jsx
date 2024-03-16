import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Log.css';
import logo from '../../assets/logo.png';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8800/user/login', {
        user_id: userId,
        password: password
      });

      // Assuming backend returns a success message or token upon successful login
      if (response.data.success) {
        // Redirect to home or do whatever you want upon successful login
        console.log('Login successful');
      } else {
        setError(true); // Set error state to true if login fails
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setError(true); // Set error state to true if there's an error during login
    }
  };

  return (
    <div className='main'>
      <img src={logo} alt="logo" className='logo'/>
      <h1 className='logtitle'>Login</h1>
      <div className='user'>
        <h3>User ID</h3>
        <input
          type="text"
          className='input'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="password"
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">Invalid user ID or password</p>}
      </div>
      <button className='btn' onClick={handleLogin}>Proceed</button>
      <Link to={`/Home`}>
        <button className='btn'>Back</button>
      </Link>
    </div>
  );
}

export default Login;
