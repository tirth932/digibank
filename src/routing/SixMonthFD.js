import React from 'react';
import { Link } from 'react-router-dom';
import './OneYearFD.css';
import { Button } from 'react-bootstrap';




const SixMonthFD = ({isAuthenticated, onLogout}) => {
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
                <h2>6 Month Fixed Deposit</h2>
                <img src="6_month.jpg" alt="6 Month FD" className="fd-image"/>
                <div className="fd-details">
                    <h3>Interest Rate: 4.5% per annum</h3>
                    
                    <ul>
                    <li>Secure and stable investment for 6 months.</li>
                    <li>Attractive interest rates for short-term growth.</li>
                    <li>Option for automatic renewal at maturity.</li>
                    <li>Loan against FD available for liquidity needs.</li>
                    <li>Early withdrawal allowed with minimal penalty.</li>
                </ul>
                    <p><strong>Minimum Deposit Amount:</strong> ₹10,000</p>
                   <Link to='/SixMonthFDSignUp'> <button className="apply-btn">Apply for 6 Month Fixed Deposit</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default SixMonthFD;
