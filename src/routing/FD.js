import React from 'react';
import { Link } from 'react-router-dom';
import './FixedDeposit.css';
import { Button } from 'react-bootstrap';


function FD({isAuthenticated, onLogout}) {
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
    <div className="fd-content">
                <h2>Choose Your Fixed Deposit Plan</h2>
                <div className="fd-cards">
                    <Link className="fd-card" to="/OneYearFD"> 
                        <img src="1_year.jpg" alt="1 Year FD" />
                        <div className="fd-info">
                            <h3>1 Year Fixed Deposit</h3>
                            <p>Secure your savings with a 1-year FD and enjoy attractive interest rates.</p>
                        </div>
                      </Link> 

                    <Link to="/SixMonthFD" className="fd-card">
                        <img src="6_month.jpg" alt="6 Months FD" />
                        <div className="fd-info">
                            <h3>6 Months Fixed Deposit</h3>
                            <p>Short-term investment with quick returns and flexibility.</p>
                        </div>
                    </Link>
                </div>

                <div className="fd-cards">
                    <Link to="/ThreeYearFD" className="fd-card">
                        <img src="3_year.jpg " width="800px"  alt="3 Years FD" />
                        <div className="fd-info">
                            <h3>3 Years Fixed Deposit</h3>
                            <p>Ideal for medium-term financial goals with stable returns.</p>
                        </div>
                    </Link>

                    <Link to="/FiveYearFD" className="fd-card">
                        <img src="5_year.jpg" alt="5 Years FD"  />
                        <div className="fd-info">
                            <h3>5 Years Fixed Deposit</h3>
                            <p>Long-term investment plan with higher interest rates and security.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  );
}

export default FD;
