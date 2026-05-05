
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
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <h1>Alice Outside Catering</h1>
      </header>
      <nav className='nav'>
        
      <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Home</Link>
      <Link to='/aboutus' className='btn btn-success text-white m-4 btn-outline-info'>About</Link>
      <Link to='/services' className='btn btn-success text-white m-4 btn-outline-info'>Services</Link>
      <Link to='/gallery' className='btn btn-success text-white m-4 btn-outline-info'>Gallery</Link>
      <Link to='/contactus' className='btn btn-success text-white m-4 btn-outline-info'>Contact</Link>
      
      {/* REAL-TIME SEARCH BAR */}
        <input
          type="text"
          placeholder="search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // live update
          className="form-control ms-auto"
          style={{ width: '200px' }}
        />
      </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/book" element={<Booking/>} />
      


    </Routes>
      <section className="row bg-success p-4">

        {/* About Us */}
        <div className="col-md-4 text-center text-white">
          <h3>About Us</h3>
          <p className="text-dark">
            We sell watches of your best wishes. We provide free delivery to our customers.
            smartwatch, a small smartphone-like device worn on the wrist. Many smartwatches are connected
            to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from
            applications. Some smartwatches can even make telephone calls.
          </p>
        </div>

        {/* Contact Us */}
        <div className="col-md-4 text-white text-center">
          <h3>Contact us</h3>

          <form>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="form-control"
            />

            <br />

            <textarea
              placeholder="Leave a comment"
              className="form-control"
            ></textarea>

            <br />

            <input
              type="submit"
              className="btn btn-outline-danger"
              value="Send message"
            />

            <br />
            <br />

            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/pngtree-whatsapp-icon-png-image_6315990.png"
                alt="WhatsApp"
                width="50"
                height="50"
              />
            </a>

            &nbsp;&nbsp; +254700046518
          </form>
        </div>

        {/* Social Links */}
        <div className="col-md-4 text-center">
          <h3 className="text-white">Stay connected</h3>
          <h4>Visit our websites @</h4>

          <p>
            <b>Facebook</b>: &nbsp;
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
          </p>

          <p>
            <b>Instagram</b>: &nbsp;
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/image (18).png" alt="Instagram" />
            </a>
          </p>

          <p>
            <b>Twitter</b>: &nbsp;
            <a href="https://www.x.com" target="_blank" rel="noreferrer">
              <img src="/images/x.png" alt="Twitter" />
            </a>
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-dark p-3">
        <p className="text-white text-center">
          Developed by William © All rights reserved
        </p>
      </footer>
    
    </div> 
    </Router>
    
    
  );
  
  
}

export default App;
