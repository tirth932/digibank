import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './SendMoney.css';
import { Button } from 'react-bootstrap';


const SendMoney = ({ addTransaction,isAuthenticated, onLogout }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSendMoney = () => {
        if (!amount || !description) {
            alert('Please enter the amount and acc number');
            return;
        }

        const transaction = {
            date: new Date().toLocaleDateString(),
            description,
            amount: `₹${amount}`,
            status: 'Completed'
        };

        addTransaction(transaction);

        // Clear inputs
        setAmount('');
        setDescription('');

        // Redirect to transaction history
        navigate('/transaction-history');
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
        <div className="send-money-page">
            <h2>Send Money</h2>
            <p>Transfer funds quickly and securely to anyone, anywhere.</p>
            <form>

            <div className='form-group'> <label>Amount:</label>
            <input
                type="text"
                value={amount}
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
            <div className="form-group"> <label>Recipient's Account Number:</label>
            <input
                type="text"
                value={description}
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            
            <button onClick={handleSendMoney}  className="btn btn-primary">Send</button>
            </form>
        </div>
        </>
    );
};

export default SendMoney;
