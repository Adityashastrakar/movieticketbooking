import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const data = await response.text(); 
            // const data = JSON.parse(responseData); 
            switch (data) {
                case 'user':
                    alert('User Login Successful');
                    navigate('/userdashboard');
                    break;
                case 'Towner':
                    alert('Owner Login Successful');
                    navigate('/ownerdashboard');
                    break;
                default:
                    console.error('Invalid role:', data);
                    break;
            }
        } else {
           alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;