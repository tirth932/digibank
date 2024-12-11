import React,{ useState } from "react"
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import { Button } from 'react-bootstrap';


const SixMonthFDSignUp = ({ setAuth,isAuthenticated, onLogout }) => {
    const [amount, setAmount] = useState('');
    const [interest, setIntrest] = useState('');
    const [period, setPeriod] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('127.0.0.1:8000/api/fd', {
            amount,
            interest,
            period,
        })

        setAuth(true);
        navigate('/');
    }

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
        <div className="signup-container">
            <h2>Six Month FD</h2>
            <form onSubmit={handleSubmit}>
            <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                
                <input
                    type="text"
                    placeholder="Interest"
                    value={interest}
                    onChange={(e) => setIntrest(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Period"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    required
                />
                
                <button type="submit" onChange={handleSubmit}>Signup</button>
            </form>
        </div>
        </>
    )
}

export default SixMonthFDSignUp