import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
// import { useNavigate } from 'react-router-dom';


function Home() {

    // const navigate =useNavigate();
//   const history = useHistory();
  const [formData, setFormData] = useState({
    name:'',
    username: '',
    password: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        alert('User signed up successfully:', data);
        <Login/>
      } else {
        alert('Sign up failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='d-flex vh-100 justify-content-center'>
        <div>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Towner">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <button  type="submit">Sign Up</button>
    </form>
    </div>
    </div>
  );
}
export default Home;