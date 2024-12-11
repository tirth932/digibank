import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';


const Login = ({onLoginSuccess}) => {
    const [username, setCustomerid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login/', {
            username: username,
            password: password,
          })
          .then(response => {
            console.log('Login successful', response.data);
            
              // Save token and update authentication state
            localStorage.setItem('authToken', response.data.token);
            onLoginSuccess()
           
            navigate('/'); // Redirect to the home page
            
          })
          .catch(error => {
            if (error.response) {
              console.log(username)
              console.error('Response error:', error.response.data);
            } else if (error.request) {
              console.error('Request error:', error.request);
            } else {
              console.error('Error', error.message);
            }
          });
      
    };

    return (
        <div className="login-container">
            <h2>Login to DigiBank</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setCustomerid(e.target.value)}
                    
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
