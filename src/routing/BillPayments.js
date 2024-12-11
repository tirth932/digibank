
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './BillPayments.css';
import { Button } from 'react-bootstrap';

const BillPayments = ({ addTransaction,isAuthenticated, onLogout }) => {
    const [billType, setBillType] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleBillPayment = () => {
        if (!billType || !amount) {
            alert('Please select a bill type and enter the amount');
            return;
        }

        const transaction = {
            date: new Date().toLocaleDateString(),
            description: `${billType} Bill Payment`,
            amount: `₹${amount}`,
            status: 'Completed'
        };

        addTransaction(transaction);

        // Clear inputs
        setBillType('');
        setAmount('');

        // Redirect to transaction history
        navigate('/transaction-history');
    };

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
        <div className="bill-payments-page">
            <h2>Bill Payment</h2>
            <p>Pay your utility bills with ease.</p>
            <form>
            <div className="form-group">
            <label>Select Bill Type:</label>
            <select value={billType} onChange={(e) => setBillType(e.target.value)}>
                <option value="">Select Bill Type</option>
                <option value="Electricity">Electricity Bill</option>
                <option value="Gas">Gas Bill</option>
                <option value="Water">Water Bill</option>
                <option value="Internet">Internet Bill</option>
                <option value="Phone">Phone Bill</option>
            </select>
            </div>
            <div className="form-group">
                    <label>Enter Money:</label>
            <input
                type="text"
                value={amount}
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
            <button onClick={handleBillPayment} className="btn btn-primary">Pay Bill</button>
            </form>
        </div>
        </div>
    );
};

export default BillPayments;


