import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional: Custom styles
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Footer = ({isAuthenticated, onLogout}) => {
    const [showMore, setShowMore] = useState(true);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
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
        
        
        
        
        <div className="container">
            <footer>

                <h2>Popular Products</h2>
                <div className="popular-products">
                    <a href="/Home">Home Loan</a> |
                    <a href="/Loan  ">Personal Loan</a> |
                    <a href="#">Vehicle Loan</a> |
                    <a href="#">Education Loan</a> |
                    <a href="#">Savings Account</a> |
                    <a href="#">Debit Card</a> |
                    <a href="#">Credit Card</a> |
                </div>
                <hr />
                <div className="links-section">
                    <div className="links-column">
                        <h3>Useful Links</h3>
                        <a href="/communication-bse-nse">Communication to BSE/NSE</a>
                        <a href="/esg-corner" >ESG Corner</a>
                        <a href="/notice-customers" >Notice For Customers</a>
                        <a href="/aml-kyc" >AML/KYC</a>
                        <a href="/sitemap" >Sitemap</a>
                        <a href="/customer-care">Customer Care</a>
                        <a href="/disclaimer" >Disclaimer</a>
                        <a href="/rbi-kehta-hai" >RBI Kehta Hai</a>
                        <a href="/rbi-monetary-info" >Information on RBI Monetary</a>
                        <a href="/us-patriot-act" >US Patriot Act</a>
                        <a href="/calculator" >Calculator</a>
                        <a href="/complaint-digital-transactions" >Complaint for Failed Digital Transactions</a>
                    </div>
                    <div className="links-column">
                        <h3>Important Links</h3>
                        <a href="/tender" >Tender</a>
                        <a href="/death-claim-portal" >Death Claim Portal</a>
                        <a href="/career" >Career</a>
                        <a href="/regulatory-disclosure" >Regulatory Disclosure Section</a>
                        <a href="/screen-reader-accessibility" >Screen Reader Accessibility</a>
                        <a href="/national-portal" >National Portal</a>
                        <a href="/positive-pay-system" >Positive Pay System</a>
                        <a href="/account-aggregator" >Account Aggregator</a>
                        <a href="/unclaimed-account" >Inoperative/Unclaimed Account</a>
                    </div>
                    <div className="links-column">
                        <h3>Other Links</h3>
                        <a href="/valuer-empanelment" >Application for empanelment of valuers</a>
                        <a href="/iem" >Independent External Monitor (IEM)</a>
                        <a href="/rsetis" >RSETIs</a>
                        <a href="/csr" >CSR</a>
                        <a href="/citizens-duties" >Citizens' Duties-Constitution of India</a>
                        <a href="/eshakti" >eShakti</a>
                        <a href="/pmry" >PMRY</a>
                        <a href="/staff-portal" >Staff Portal</a>
                        <a href="/star-share-trade" >Star Share Trade</a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2024 Your Bank Name. All rights reserved.</p>
                </div>
                <div className="text-center mt-4">
                    <button onClick={toggleShowMore} className="btn btn-outline-light">
                        {showMore ? 'See Less ⬇️' : 'Additional Links ⬆️'}
                    </button>
                </div>
                {showMore && (
                    <div className="links-section">
                        {/* Additional content to be shown or hidden can go here */}
                        <div className="links-column">
                            <h3 className="text-uppercase mb-4">Contact Us</h3>
                            <p>India:<br />
                                1800 103 1906 (toll free)<br />
                                1800 220 229 (toll free - COVID Support)<br />
                                (022) - 40919191 (Chargeable number) 24X7<br />
                                For Overseas Contact <a href="/overseas-contact" >Click Here</a>
                            </p>
                            <h5>Connect with us</h5>
                            <div className="d-flex">
                                <a href="https://facebook.com" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                                <a href="https://linkedin.com" className="text-light me-3"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://instagram.com" className="text-light"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        {/* <div className="links-column">
                            <h3 className="text-uppercase mb-4">Quick Access</h3>
                            <a href="/interest-rate" >Interest Rate</a>
                            <a href="/service-charge" >Service Charge</a>
                            <a href="/policies-guidelines" >Policies & Guidelines</a>
                            <a href="/doorstep-banking" >Doorstep banking</a>
                            <a href="/smart-banking" >Smart Banking</a>
                            <a href="/safe-banking" >Safe Banking</a>
                            <a href="/bcsbi" >BCSBI</a>
                            <a href="/insolvency-professionals" >IBBI panel of Insolvency Professionals for Jul 1, 2024 to Dec 31, 2024</a>
                            <a href="/online-quiz" >4th National Online Quiz on Insolvency and Bankruptcy Code, 2016</a>
                        </div>
                        <div className="links-column">
                            <h3 className="text-uppercase mb-4">Internal Engagements</h3>
                            <a href="/media-center" >Media Center</a>
                            <a href="/regional-rural-banks" >Regional Rural Banks</a>
                            <a href="/treasury" >Treasury</a>
                            <a href="/training-centres" >Training Centres</a>
                            <a href="/auditors" >Auditors Of The Bank</a>
                            <a href="/cvc-integrity-pledge" >CVC link for integrity pledge</a>
                            <a href="/syndicate-asba" >Syndicate Asba</a>

                        </div> */}
                    </div>
                )}
            </footer>

        </div>
        </>
    );
}

export default Footer;
