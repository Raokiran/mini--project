import React from 'react'
import './Landing.css'
import logo from '../../assets/logo.png'
import{Link} from "react-router-dom"


function Landing() {
  return (
    <div className='main'>
      <img src= {logo} alt="logo" className='logo'/>
      <h1 className='header'>WELCOME</h1>
      <h2 className='slogan'>"WE CAME,WE SAW ,WE CONQUER"</h2>
      <h1>*Get the best price of the matches and events in our stadium*</h1>
      <h4>*This is the official website of Mighty Mite's*</h4>
      <Link to={`/Log`}>
        <button className='btn'>Login</button>
      </Link>
      <Link to={`/Signup`}>
        <button className='btn'>Signup</button>
      </Link>
      
    </div>
  )
}

export default Landing
