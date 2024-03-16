import React from 'react'
import'./Ticket.css'
import Nav from "../../components/navbar/Nav"
function Ticket() {
  return (
    <div className="evemain">
      <Nav></Nav>
    <div className="ticket">
      
    <div className="ticket-header">
      <h2>event name</h2>
    </div>
    <div className="ticket-info">
      <p>booking id:</p>
      <p>event id</p>
      <p>event name</p>
      <p>Date: </p>
      <p>Time: </p>
      <p>Seat Number: </p>
      <p>Price: </p>
    </div>
  </div>
  </div>
  )
}

export default Ticket