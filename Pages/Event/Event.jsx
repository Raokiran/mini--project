import React from 'react';
import Nav from '../../components/navbar/Nav';
import './Event.css';
import { Link } from 'react-router-dom';
const Event = () => {
 
  return (
<div className='evemain'>
<Nav></Nav>
<h1 className='evendes'>Event name:</h1>
<h1 className='evendes'>Event id:</h1>
<h1 className='evendes'>Event desc:</h1>
<h1 className='evendes'>Event date:</h1>
<h1 className='evendes'>start time:</h1>
<h1 className='evendes'>end time:</h1>
<Link to='/Seats'> <button className='btn'>proceed</button></Link>

</div>
  );
};

export default Event;
