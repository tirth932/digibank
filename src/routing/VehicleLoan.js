import React from 'react';
import Navbar from './Navbar';  // Ensure Navbar component is in the same folder or adjust the path
import './HomeLoan.css'; 
import {Link} from 'react-router-dom' // Ensure you have the CSS file for styling
import { Button } from 'react-bootstrap';


const HomeLoan = ({isAuthenticated, onLogout}) => {
  return (
    <>
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
      
      <div className="home-loan-container">
        <div className="home-loan-header">
          <h1>Vehicle Loan</h1>
        </div>
        <div className="home-loan-content">
          <div className="home-loan-text">
          <h2>Drive Your Dream Vehicle Today</h2>

            <p> Our Vehicle Loan helps you get behind the wheel of your dream car or bike. With competitive interest rates and flexible repayment options, we make it easy for you to own your dream vehicle.</p>
            <ul>
            <li>Attractive interest rates</li>
              <li>Flexible repayment tenure</li>
              <li>Quick and hassle-free loan processing</li>
              <li>Minimal documentation</li>
              <li>High loan amount eligibility</li>
            </ul>
           <Link to="/VehicleLoanSignUp"><button className="apply-button">Apply for Vehicle Loan</button></Link> 
          </div>
          <div className="home-loan-image">
            <img src="vehicleloan.jpg" style={{width:"500px"}} alt="vehicle Loan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
