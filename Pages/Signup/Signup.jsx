import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import './Signup.css';
import logo from '../../assets/logo.png';

const Signup = () => {
  const [values, setValues] = useState({
    user_id: '',
    pass: '',
    email: '',
    nam: '',
    phone: null,
  });
  const [error, setError] = useState(false); 

  const handleClick = async (e) => {
    e.preventDefault();
 
    if (!values.user_id || !values.pass || !values.email || !values.phone || !values.nam) {
      console.log("Please fill in all fields.");
      setError(true); 
      return; 
    }
    
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      console.log("Please enter a valid email address.");
      setError(true); 
      return; 
    }
  

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(values.phone)) {
      <h1>Please enter a 10-digit phone number</h1>
      return; 
    }
  
    try {
      await axios.post('http://localhost:8800/user', values); 
      setError(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleChange = (e) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false); 
  };

  return (
    <div className='signmain' >
      <div className='sain'>
      <h1>SIGNUP</h1>
        <h3>User id</h3>
        <input type="text" className="input" placeholder="user_id" onChange={handleChange} name="user_id" />
        <h3>Password</h3>
        <input type="text" className="input" placeholder="password" onChange={handleChange} name="pass" /> 
        <h3>Email</h3>
        <input type="text" className="input" placeholder="email" onChange={handleChange} name="email" /> 
        <h3>Phone</h3>
        <input type="number" className="input" placeholder="phone" onChange={handleChange} name="phone" />
        <h3>Name</h3>
        <input type="text" className="input" placeholder="name" onChange={handleChange} name="nam" /> 
        {error ? (
          <button className='btn' onClick={handleClick}>Check</button>
        ) : (
          <Link to="/Home">
          <button className='btn'>PROCEED</button>
        </Link>
        )}
              </div>
      <div className='logosi'>
      <img src= {logo} alt="logo" className='logo'/>
    </div>
    </div>
  );
};

export default Signup;
