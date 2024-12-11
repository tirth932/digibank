import React from "react";
import { Link } from 'react-router-dom';
import './FixedDeposit.css';
import { Button } from 'react-bootstrap';

function Cards( {isAuthenticated,onLogout}) {
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
                <h2>Apply or renewal of credit/debit cards</h2>
                <div className="fd-cards">
                    <Link className="fd-card" to="/Credit_card">
                        <img src="credit_card.jpg" alt="credit card" />
                        <div className="fd-info">
                            <h3>Apply or renew you credit cards</h3>
                            <p>
                                Many exciting offer from very luxurious brand are awaiting for you, so what are you waiting for...
                            </p>
                        </div>
                    </Link>

                    <Link to="/Debit_card" className="fd-card">
                        <img src="debit_card.jpg" alt="debit card"/>
                        <div className="fd-info">
                            <h3>Apply or renew you debit cards</h3>
                            <p>Many exciting offer from very luxurious brand are awaiting for you, so what are you waiting for...</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;
