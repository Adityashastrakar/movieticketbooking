import React, { useState } from 'react';

function OwnerDB() {
  // Define state variables for form fields
  const [movieName, setMovieName] = useState('');
  const [showTime, setShowTime] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { movieName, showTime, ticketPrice });

  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieName">Movie Name:</label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="showTime">Show Time:</label>
          <input
            type="text"
            id="showTime"
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ticketPrice">Ticket Price:</label>
          <input
            type="number"
            id="ticketPrice"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default OwnerDB;