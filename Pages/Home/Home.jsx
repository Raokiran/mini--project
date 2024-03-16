import React, { useState } from 'react';
import './Home.css';
import Nav from '../../components/navbar/Nav';
import{Link} from "react-router-dom"
const Home = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/saveSelectedItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event_name: selectedItem }),
      });

      if (response.ok) {
        console.log('Selected item saved successfully.');
        // Optionally, you can navigate to another page after successful submission
      } else {
        console.error('Failed to save selected item.');
      }
    } catch (error) {
      console.error('Error saving selected item:', error);
    }
  };

  return (
    <div className="Homemain">
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className='texts'>
          <label className='lab'>
            Select an item:
            <select value={selectedItem} onChange={handleSelectChange}>
              <option value="sentia">Sentia</option>
              <option value="match1">Match1</option>
              <option value="match2">Match2</option>
            </select>
          </label>
        </div>
        <Link to='/Event'> 
        <button type="submit" className='btn'>PROCEED</button>
        </Link>
      </form>

      {/* Table to display the selected item */}
      {selectedItem && (
        <table>
          <thead>
            <tr>
              <th>Selected Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedItem}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
