import React from 'react';
import Navbar from './Navbar';  // Ensure Navbar component is in the same folder or adjust the path
import './HomeLoan.css'; 
import { Link } from 'react-router-dom';
 // Ensure you have the CSS file for styling
 import { Button } from 'react-bootstrap';

const BusinessLoan = ({isAuthenticated,onLogout}) => {
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
          <h1>Business Loan</h1>
        </div>
        <div className="home-loan-content">
          <div className="home-loan-text">
          <h2>Fuel Your Business Growth</h2>
          <p>Our business loans are designed to help you scale your operations and achieve your business goals.</p>
          <ul>
                    <li>Competitive interest rates starting from 9.5% per annum</li>
                    <li>Flexible repayment tenure up to 7 years</li>
                    <li>Loan amount up to 85% of the business value</li>
                    <li>Fast approval and quick disbursement</li>
                    <li>Minimal documentation and hassle-free process</li>
                </ul>
           <Link to="/BusinessLoanSignUp"><button className="apply-button">Apply for Business Loan</button></Link> 
          </div>
          <div className="home-loan-image">
            <img src="bus.jpg" alt="Home Loan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessLoan;
