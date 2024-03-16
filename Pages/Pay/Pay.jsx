import React, { useState } from 'react';
import './Pay.css'; 
import {Link} from "react-router-dom"
import Nav from "../../components/navbar/Nav"
function Pay() {
  return (
    <div className='sevemain'>
    <Nav></Nav>
    <h2 className='evendes'>booking id:</h2>
    <h2 className='evendes'>Event id:</h2>
    <h2 className='evendes'>Event desc:</h2>
    <h2 className='evendes'>Event date:</h2>
    <h2 className='evendes'>start time:</h2>
    <h2 className='evendes'>end time:</h2>
    <h2 className='evendes'>total seats:</h2>
    <h2 className='evendes'>total amount:</h2>
    <h2 className='evendes'>seat no's:</h2>
    <h2 className='evendes'>row no's:</h2>
    <h2 className='evendes'>stand no's:</h2>
    <Link to='/Ticket'> <button className='btn'>proceed</button></Link>
    
    </div>
  )
}

export default Pay
