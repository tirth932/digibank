import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  Button } from 'react-bootstrap'; // Import Button from 'react-bootstrap'




function Navbar({ isAuthenticated, onLogout }) {
  return (
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
  );
}

export default Navbar;
         