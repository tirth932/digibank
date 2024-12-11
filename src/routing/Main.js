import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Loan from './Loan';
import Transaction from './Transaction';
import FD from './FD';
import HomeLoan from './HomeLoan';
import VehicleLoan from './VehicleLoan';
import EducationLoan from './EducationLoan';
import GoldLoan from './GoldLoan';
import AgriLoan from './AgriLoan';
import BusinessLoan from './BusinessLoan';
import Footer from './Footer';
import OneYearFD from './OneYearFD';
import SixMonthFD from './SixMonthFD';
import ThreeYearFD from './ThreeYearFD';
import FiveYearFD from './FiveYearFD';
import Cards from './Cards';
import Credit_card from './Credit_card';
import Debit_card from './Debit_card';
import SendMoney from './SendMoney';
import BillPayments from './BillPayments';
import TransactionHistory from './TransactionHistory';
import Login from './Login';
import Signup from './Signup';
import ScrollToTop from './ScrollToTop';
import VehicleLoanSignUp from './VehicleLoanSignUp';
import HomeLoanSignUp from './HomeLoanSignUp';
import BusinessLoanSignUp from './BusinessLoanSignUp';
import EducationLoanSignUp from './EducationLoanSignUp';
import GoldLoanSignUp from './GoldLoanSignUp';
import AgriLoanSignUp from './AgriLoanSignUp';
import OneYearFDSignUp from './OneYearFDSignUp';
import FiveYearFDSignUp from './FiveYearFDSignUp';
import SixMonthFDSignUp from './SixMonthFDSignUp';
import ThreeYearFDSignUp from './ThreeYearFDSignUp'; 
function Main() {
  const [transactionHistory, setTransactionHistory] = useState([]);

  const addTransaction = (transaction) => {
      setTransactionHistory([...transactionHistory, transaction]);
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

    const onLogout = () => {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
      
    };
  
  return (
    <Router>
      {/* <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} /> */}
      
      <ScrollToTop/>
      <Routes>
        <Route path="/OneYearFDSignUp" element={<OneYearFDSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/FiveYearFDSignUp" element={<FiveYearFDSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/SixMonthFDSignUp" element={<SixMonthFDSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/ThreeYearFDSignUp" element={<ThreeYearFDSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/BusinessLoanSignUp " element={<BusinessLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/VehicleLoanSignUp" element={<VehicleLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/HomeLoanSignUp" element={<HomeLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/EducationLoanSignUp" element={<EducationLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/GoldLoanSignUp" element={<GoldLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/AgriLoanSignUp" element={<AgriLoanSignUp isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/OneYearFD" element={<OneYearFD isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/SixMonthFD" element={<SixMonthFD isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/ThreeYearFD" element={<ThreeYearFD isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/FiveYearFD" element={<FiveYearFD isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/home-loan" element={<HomeLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/vehicle-loan" element={<VehicleLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/education-loan" element={<EducationLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/gold-loan" element={<GoldLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/agri-loan" element={<AgriLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/busi-loan" element={<BusinessLoan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/Cards" element={<Cards isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/Credit_card" element={<Credit_card isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        <Route path="/Debit_card" element={<Debit_card isAuthenticated={isAuthenticated} onLogout={onLogout} />} />
        
        <Route path="/bill-payments" element={<BillPayments addTransaction={addTransaction} />} />

        <Route path="/send-money" element={<SendMoney addTransaction={addTransaction} />} />
        <Route path="/transaction-history" element={<TransactionHistory history={transactionHistory} />} />
           
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/loan" element={<Loan isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/transaction" element={<Transaction isAuthenticated={isAuthenticated} onLogout={onLogout}  />} />
        <Route path="/fd" element={<FD />} />
        <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
          
                <Route
                    path="/signup"
                    element={<Signup setAuth={setIsAuthenticated} />}
                />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Main;
