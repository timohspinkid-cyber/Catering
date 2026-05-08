
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

import Home from './components/home';
import Services from './components/services';
import About from './components/aboutus';
import Gallery from './components/gallery';
import Contact from './components/contactus';
import Booking from './components/booking';
import SignIn from './components/signin';
import SignUp from './components/signup';
import RuracioCatering from './components/Ruracios';
import BurialCatering from './components/Burials';
import WeddingCatering from './components/wedding';
import BirthdayCatering from './components/Birthday';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>

    <div className="App">
     
      <nav className='App-header navbar navbar-expand-lg '>
        <div className='container-fliud'>
          <a href='#' className='navbar-brand d-flex align-items-center'>
            <div>
              <img src="/images/favicon.ico" alt="" />
            </div>
            <span className='ms-2'>Alice Outside catering</span>
          </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


        </div>
        
      <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Home</Link>
      <Link to='/aboutus' className='btn btn-success text-white m-4 btn-outline-info'>About us</Link>


      <nav className="navbar navbar-expand-lg navbar-success   bg-success px-1  btn btn-success text-white m-4 btn-outline-info">

        {/* Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/services">
          Services
        </Link>

        {/* Toggle (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Dropdown */}
            <li className="nav-item dropdown">

              {/* ✅ Visible text + arrow ALWAYS visible */}
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link to='/wedding' className='dropdown-item'>wedding</Link>
                </li>
                <li>
                  <Link to='/ruracio' className='dropdown-item'>Ruracio</Link>
                  
                </li>
                <li>
                  <Link className="dropdown-item" to="/birthday">
                    Birthday
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/graduation">
                    Graduation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/burial">
                    Burial
                  </Link>
                </li>
                 <li>
                  <Link className="dropdown-item" to="/conferences">
                    Conferences
                  </Link>
                </li>
              </ul>

            </li>

          </ul>
        </div>
      </nav>
    <Link to='/gallery' className='btn btn-success text-white m-4 btn-outline-info'>Gallery</Link>
      <Link to='/contactus' className='btn btn-success text-white m-4 btn-outline-info'>Contact Us</Link>
      <Link to='/signin' className='btn btn-success text-white m-4 btn-outline-info'>SignIn</Link>
      <Link to='/signup' className='btn btn-success text-white m-4 btn-outline-info'>SignUp</Link>

       </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path="/book" element={<Booking/>} />
      <Route path="/wedding" element={<WeddingCatering/>} />
      <Route path="/ruracio" element={<RuracioCatering/>} />
      <Route path="/burial" element={<BurialCatering/>} />
      <Route path="/birthday" element={<BirthdayCatering/>} />
      <Route path="/graduation" element={<graduationCatering/>} />
      
      
      
      

    </Routes>



    
      <section className="row bg-success p-3">
  <div className="col-md-12 text-center">
    <h3 className="text-white">Stay connected</h3>
    <h5 className="text-white">Visit our websites @</h5>

    {/* Social Icons Row */}
    <div className="d-flex justify-content-center align-items-center gap-4 mt-3">

      <a href="https://www.facebook.com
" target="_blank" rel="noreferrer">
        <img src="/images/fb.png" alt="Facebook" width="40" />
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img src="/images/instagram.jpeg" alt="Instagram" width="40" />
      </a>

      <a href="https://www.x.com" target="_blank" rel="noreferrer">
        <img src="/images/x.png" alt="Twitter" width="40" />
      </a>
      <a href="https://wa.me/254707726620"
        target="_blank"
        rel="noreferrer"
        className="text-success"
      >
          <img src="/images/whatapp.png" alt="Twitter" width="40" />
              
      </a>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-dark p-3">
        <p className="text-white text-center">
          Developed by Timothy Mwendwa © All rights reserved
        </p>
      </footer>
    
    </div> 
    </Router>
        
    
    
    
  );
  
  
}

export default App;
