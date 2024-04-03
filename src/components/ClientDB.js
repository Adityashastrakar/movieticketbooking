import React, { useState } from 'react';

function ClientDB() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, numberOfTickets });
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default ClientDB;