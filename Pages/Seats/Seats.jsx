
import React, { useState } from 'react';
import './Seats.css'; 
import {Link} from "react-router-dom"
import Nav from "../../components/navbar/Nav"
const Seats = () => {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seatNumber) => {
   
    const index = selectedSeats.indexOf(seatNumber);

    if (index === -1) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
    
      const updatedSeats = [...selectedSeats];
      updatedSeats.splice(index, 1);
      setSelectedSeats(updatedSeats);
    }
  };
  

  const renderSeats = () => {
    const rows = 3; 
    const cols = 10; 
    const seats = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const seatNumber = i * cols + j + 1;
        const isSelected = selectedSeats.includes(seatNumber);

      
        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatSelection(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seats.push(<br key={`br-${i}`} />);
    }

    return seats;
  };

  return (
    <div className="evemain">
      <Nav />
     <h1>Select the stand</h1>
     
      <div className="seats">{renderSeats()}</div>
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>Seat {seat}</li>
          ))}
        </ul>
      </div>
      <div>
      <Link to={`/Pay`}>
        <button className='btn'>proceed</button>
      </Link>
      </div>
    </div>
  );
};

export default Seats;
