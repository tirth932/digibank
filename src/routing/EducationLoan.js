import React from 'react';

import './HomeLoan.css';
import { Link } from 'react-router-dom';
  // Ensure you have the CSS file for styling
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
          <h1>Education Loan</h1>
        </div>
        <div className="home-loan-content">
          <div className="home-loan-text">
          <h2>Invest in Your Future with Education Loans</h2>

            <p>Our Education Loan is designed to help you pursue higher education without any financial worries. With flexible terms and easy repayment options, we support your academic aspirations.</p>
            <ul>
            <li>Competitive interest rates</li>
              <li>Flexible repayment options</li>
              <li>Loan covers tuition fees, accommodation, and other expenses</li>
              <li>Moratorium period available</li>
              <li>Fast loan processing</li>
            </ul>
           <Link to="/EducationLoanSignUp"> <button className="apply-button">Apply for Education Loan</button></Link>
          </div>
          <div className="home-loan-image">
            <img src="eduloan.jpg" alt="education Loan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
