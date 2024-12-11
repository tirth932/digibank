import React, { useState } from "react";
import './CD_cards.css';
import { useNavigate,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Credit_card({isAuthenticated, onLogout}) {
    const navigate = useNavigate(); // Initialize useNavigate for redirection
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the form from reloading the page
        alert("Your credit card application has been submitted successfully!");
        navigate("/")
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="/">
      <img src="logo.png" alt="DigiBank Logo" style={{ height: '40px', marginRight: '10px' }} />
      DigiBank
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/loan">Loan Options</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cards">Credit/Debit Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/transaction">Transaction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fd">FD</Link>
        </li>
      </ul>
      {!isAuthenticated ? (
                        <>
                            <Button as={Link} to="/login" variant="outline-light" className="mr-2" style={{width:"80px"}} >
                                Login
                            </Button>
                            <Button as={Link} to="/signup" variant="outline-light" class="but" style={{width:"80px"}}>
                                Signup
                            </Button>
                        </>
                    ) : (
                        <Button onClick={onLogout} variant="outline-light" class="but" style={{width:"60px"}}>
                            Logout
                        </Button>
                    )}
    </div>
  </nav>
            <div className="container1">
                <div className="title">Credit Card</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Account No.</span>
                                <input type="text" placeholder="Enter your Account No." required />
                            </div>
                            <div className="input-box">
                                <span className="details">Pan No.</span>
                                <input type="text" placeholder="Enter your Pan No." required />
                            </div>
                            <div className="input-box">
                                <span className="details">Aadhar No.</span>
                                <input type="text" placeholder="Enter your Aadhar card No." required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text-area" placeholder="Enter your Address" required />
                            </div>
                        </div>

                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            
                            <span className="gender-title">Applying for</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">new one</span>
                                </label>
                            </div>

                            <div className="button">
                                <input type="submit" value="Apply" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Credit_card;
