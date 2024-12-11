import React from 'react';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { Button } from 'react-bootstrap';


import { Link } from 'react-router-dom';

function Home({isAuthenticated, onLogout}) {
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
      <Carousel />
      <div className="container" class="apple">
        <div className="d-flex flex-wrap justify-content-between">
          {/* Card 1 */}
          <div className="card-item">
            <div className="image-container">
              <picture>
                <source media="(max-width:300px)" srcSet="home.jpg" />
                <source media="(max-width:370px) and (min-width:300px)" srcSet="home.jpg" />
                <img className="img-fluid card-image" class="al" alt="HOME LOAN" src="home.jpg" />
              </picture>
            </div>
            <div className="text-container ">
              <h3 className="font-weight-bold mb-2 mt-4 text-dark text-center">HOME LOAN</h3>
              <div className="text-dark font-weight-bold mb-2">ROI 8.40% p.a. onwards</div>
              <div className="mb-3 text-justify" style={{ color: 'black' }}>
                Provides loans to purchase a Plot for construction of a House, to purchase or construct house, as well as for renovation , alteration, addition to house/flat
                .
              </div>
              <div class="hello">
              <Link className="nav-link " to="/home-loan">
                <button className="d-flex bg-transparent animated-button ">
                  <span className="arrow arrow-btn-bg ">Learn More</span>
                </button>
              </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-item">
            <div className="image-container">
              <picture>
                <source media="(max-width:300px)" srcSet="education.jpg" />
                <source media="(max-width:370px) and (min-width:300px)" srcSet="education.jpg" />
                <img className="img-fluid card-image" class="al" alt="STAR EDUCATION LOAN" src="eduloan.jpg" />
              </picture>
            </div>
            <div className="text-container">
              <h3 className="font-weight-bold mb-2 text-dark text-center">EDUCATION LOAN</h3>
              <div className="text-dark font-weight-bold mb-2">At attractive rate of Interest</div>
              <div className="mb-3 text-justify" style={{ color: 'black' }}>
                A wide range of products that takes care of your education from nursery to doctorate around the globe.
              </div>
              <Link className="nav-link" to="/education-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-item">
            <div className="image-container">
              <picture>
                <source media="(max-width:300px)" srcSet="vehicle.jpg" />
                <source media="(max-width:370px) and (min-width:300px)" srcSet="vehicle.jpg" />
                <img className="img-fluid card-image" class="al" alt="vehicle LOAN" src="vehicleloan.jpg" />
              </picture>
            </div>
            <div className="text-container">
              <h3 className="font-weight-bold mb-2 text-dark text-center">VEHICLE LOAN</h3>
              <div className="text-dark font-weight-bold mb-2">At attractive rate of Interest</div>
              <div className="mb-3 text-justify" style={{ color: 'black' }}>
                A wide range of products that takes care of your education from nursery to doctorate around the globe.
              </div>
              <Link className="nav-link" to="/vehicle-loan">
                <button className="d-flex bg-transparent animated-button">
                  <span className="arrow arrow-btn-bg">Learn More</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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

      </div>
    </div>
  );
}

export default Home;

















// import React from 'react';
// import Carousel from './Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Home.css';

// import { Link } from 'react-router-dom';

// function Home({ isAuthenticated, onLogout }) {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <a className="navbar-brand" href="/">
//           <img src="logo.png" alt="DigiBank Logo" style={{ height: '40px', marginRight: '10px' }} />
//           DigiBank
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/loan">Loan Options</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cards">Credit/Debit Cards</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/transaction">Transaction</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/fd">FD</Link>
//             </li>
//           </ul>
//           <div className="auth-buttons">
//             {!isAuthenticated ? (
//               <>
//                 <Link to="/login" className="btn btn-outline-light mr-2" style={{ width: '80px',backgroundColor:"#7a6300" }}>
//                   Login
//                 </Link>
//                 <Link to="/signup" className="btn btn-outline-light" style={{ width: '80px' }}>
//                   Signup
//                 </Link>
//               </>
//             ) : (
//               <Link onClick={onLogout} className="btn btn-outline-light" style={{ width: '60px' }}>
//                 Logout
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//       <Carousel />
//       <div className="container apple">
//         <div className="d-flex flex-wrap justify-content-between">
//           {/* Card 1 */}
//           <div className="card-item">
//             <div className="image-container">
//               <picture>
//                 <source media="(max-width:300px)" srcSet="home.jpg" />
//                 <source media="(max-width:370px) and (min-width:300px)" srcSet="home.jpg" />
//                 <img className="img-fluid card-image" alt="HOME LOAN" src="home.jpg" />
//               </picture>
//             </div>
//             <div className="text-container">
//               <h3 className="font-weight-bold mb-2 mt-4 text-dark text-center">HOME LOAN</h3>
//               <div className="text-dark font-weight-bold mb-2">ROI 8.40% p.a. onwards</div>
//               <div className="mb-3 text-justify" style={{ color: 'black' }}>
//                 Provides loans to purchase a Plot for construction of a House, to purchase or construct house, as well as for renovation, alteration, addition to house/flat.
//               </div>
//               <div className="hello">
//                 <Link className="nav-link" to="/home-loan">
//                   <button className="d-flex bg-transparent animated-button">
//                     <span className="arrow arrow-btn-bg">Learn More</span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="card-item">
//             <div className="image-container">
//               <picture>
//                 <source media="(max-width:300px)" srcSet="education.jpg" />
//                 <source media="(max-width:370px) and (min-width:300px)" srcSet="education.jpg" />
//                 <img className="img-fluid card-image" alt="STAR EDUCATION LOAN" src="eduloan.jpg" />
//               </picture>
//             </div>
//             <div className="text-container">
//               <h3 className="font-weight-bold mb-2 text-dark text-center">EDUCATION LOAN</h3>
//               <div className="text-dark font-weight-bold mb-2">At attractive rate of Interest</div>
//               <div className="mb-3 text-justify" style={{ color: 'black' }}>
//                 A wide range of products that takes care of your education from nursery to doctorate around the globe.
//               </div>
//               <Link className="nav-link" to="/education-loan">
//                 <button className="d-flex bg-transparent animated-button">
//                   <span className="arrow arrow-btn-bg">Learn More</span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="card-item">
//             <div className="image-container">
//               <picture>
//                 <source media="(max-width:300px)" srcSet="vehicle.jpg" />
//                 <source media="(max-width:370px) and (min-width:300px)" srcSet="vehicle.jpg" />
//                 <img className="img-fluid card-image" alt="VEHICLE LOAN" src="vehicleloan.jpg" />
//               </picture>
//             </div>
//             <div className="text-container">
//               <h3 className="font-weight-bold mb-2 text-dark text-center">VEHICLE LOAN</h3>
//               <div className="text-dark font-weight-bold mb-2">At attractive rate of Interest</div>
//               <div className="mb-3 text-justify" style={{ color: 'black' }}>
//                 A wide range of products that takes care of your education from nursery to doctorate around the globe.
//               </div>
//               <Link className="nav-link" to="/vehicle-loan">
//                 <button className="d-flex bg-transparent animated-button">
//                   <span className="arrow arrow-btn-bg">Learn More</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="fd-content">
//         <h2>Choose Your Fixed Deposit Plan</h2>
//         <div className="fd-cards">
//           <Link className="fd-card" to="/OneYearFD">
//             <img src="1_year.jpg" alt="1 Year FD" />
//             <div className="fd-info">
//               <h3>1 Year Fixed Deposit</h3>
//               <p>Secure your savings with a 1-year FD and enjoy attractive interest rates.</p>
//             </div>
//           </Link>

//           <Link to="/SixMonthFD" className="fd-card">
//             <img src="6_month.jpg" alt="6 Months FD" />
//             <div className="fd-info">
//               <h3>6 Months Fixed Deposit</h3>
//               <p>Short-term investment with quick returns and flexibility.</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
