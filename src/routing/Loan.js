import React from 'react';
import "./Loan1.css"
import "./Loan.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function Loan({isAuthenticated, onLogout}) {
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
        <h1 class="go">OUR VARIOUS LOANS</h1>
    <div class="row">
            <div class="col-sm-4">
                <div class="product_2">
                    <div class="two">
                        <div class="two_text">
                            <img src="home.jpg"  alt/>
                            <p style={{color: "black"}}>Home Loan</p>
                            <Link className="nav-link" to="/home-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-4">
                <div class="product_2">
                    <div class="two">
                        <div class="two_text">
                            <img src="eduloan.jpg"  alt />
                            <p style={{color: "black"}}>Education Loan</p>
                            <Link className="nav-link" to="/education-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-4">
                <div class="product_2">
                    <div class="two">   
                        <div class="two_text">
                            <img src="vehicleloan.jpg"  alt />
                            <p style={{color: "black",mt:"-130px"}}>Vehicle Loan</p>
                            <Link className="nav-link" to="/vehicle-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
        <div class="col-sm-4">
            <div class="product_2">
                <div class="two">
                    <div class="two_text">
                        <img src="gold.jpg" alt/>
                        <p style={{color: "black"}}>Gold Loan</p>
                        <Link className="nav-link" to="/gold-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>

                    </div>
                </div>
            </div>

        </div>
        <div class="col-sm-4">
            <div class="product_2">
                <div class="two">
                    <div class="two_text">
                        <img src="agri.jpg"   alt />
                        <p style={{color: "black"}}>Agriculture Loan</p>
                        <Link className="nav-link" to="/agri-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>

                    </div>
                </div>
            </div>

        </div>
        <div class="col-sm-4">
            <div class="product_2">
                <div class="two">   
                    <div class="two_text">
                        <img src="bus.jpg"  alt />
                        <p style={{color: "black",mt:"-130px"}}>Business Loan</p>
                        <Link className="nav-link" to="/busi-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
        
        

        
        
  );
}

export default Loan;
