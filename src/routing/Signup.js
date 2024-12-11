
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [acc_no, setAcc_no] = useState('');
    const [pan_no, setPan_no] = useState('');
    const [customer_id, setCustomer_id] = useState(''); // Ensure this is treated as a string or number
    const [is_admin, setIsAdmin] = useState(false); // Use boolean values
    const [is_customer, setIsCustomer] = useState(true); // Use boolean values
    const [balance, setBalance] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [acc_type, setAccType] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateContactNumber = (contact) => /^[0-9]{10}$/.test(contact);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};
        if (password !== password2) {
            formErrors.password2 = 'Passwords do not match.';
        }
        if (!validateContactNumber(contact)) {
            formErrors.contact = 'Contact number must be exactly 10 digits.';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        axios.post('http://127.0.0.1:8000/api/sign-up/', {
            username,
            email,
            acc_no,
            pan_no,
            customer_id: parseInt(customer_id), // Ensure it's sent as a number
            is_admin,
            is_customer,
            balance,
            address,
            contact,
            acc_type,
            password,
            password2,
        })
        .then(response => {
            console.log('Signup successful:', response.data);
            setAuth(true);
            navigate('/');
        })
        .catch(error => {
            if (error.response) {
                console.error('Signup error:', error.response.data);
                setErrors({ server: error.response.data });
            } else {
                console.error('Signup error:', error.message);
                setErrors({ server: 'An error occurred during signup. Please try again.' });
            }
        });
    };

    return (
        <div className="signup-container">
            <h2>Create Your DigiBank Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Account No"
                    value={acc_no}
                    onChange={(e) => setAcc_no(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="PAN No"
                    value={pan_no}
                    onChange={(e) => setPan_no(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Customer ID"
                    value={customer_id}
                    onChange={(e) => setCustomer_id(e.target.value)}
                    required
                />
                <div>
                    <label style={{color:"black"}}>Admin:
                    <input
                        type="checkbox"
                        checked={is_admin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    </label>
                    <label style={{color:"black"}}>Customer:
                    <input
                        type="checkbox"
                        checked={is_customer}
                        onChange={(e) => setIsCustomer(e.target.checked)}
                    />
                    </label>
                </div>
                <input
                    type="number"
                    placeholder="Balance"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Contact No"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                {errors.contact && <div className="error">{errors.contact}</div>}
                <input
                    type="text"
                    placeholder="Account Type"
                    value={acc_type}
                    onChange={(e) => setAccType(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                {errors.password2 && <div className="error">{errors.password2}</div>}
                <button type="submit">Signup</button>
                {errors.server && <div className="error">{errors.server}</div>}
            </form>
        </div>
    );
};

export default Signup;