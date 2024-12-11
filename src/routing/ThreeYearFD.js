import React from 'react';
import './OneYearFD.css';
import {Link} from 'react-router-dom'// Replace with the correct path to your image
import { Button } from 'react-bootstrap';


const ThreeYearFD = ({isAuthenticated, onLogout}) => {
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
        <div className="one-year-fd-page">
            <div className="fd-details-content">
                <img src="3_year.jpg" alt="3 Years Fixed Deposit"  className="fd-image" />
                <h3>3 Years Fixed Deposit</h3>
                
           

            <div className="fd-details">
                <h4>Details of the 3 Years Fixed Deposit:</h4>
                <ul>
                    <li>Interest Rate: 6.2% per annum</li>
                    <li>Tenure: 3 years</li>
                    <li>Minimum Deposit: ₹50,000</li>
                    <li>Stable and secure investment for medium-term goals.</li>
                    <li>Interest payout options: monthly, quarterly, or annual.</li>
                    <li>Loan against FD available for liquidity.</li>
                    <li>Automatic renewal option available at maturity.</li>
                    <li>Early withdrawal allowed with nominal penalty.</li>
                </ul>
                <Link to="/ThreeYearFDSignUp"><button className="apply-btn">Apply for 3 Years Fixed Deposit</button></Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default ThreeYearFD;
