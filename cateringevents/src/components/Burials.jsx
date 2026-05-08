import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaWhatsapp,
  
} from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const BurialCatering = () => {
  return (
    <div className="bg-light min-vh-100">

      {/* HERO SECTION */}
      <div
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">burial Catering</h1>

          
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container py-5">

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-md-12">

            <div className="bg-white shadow-sm rounded p-4">

              <img
                src="/images/burial1.jpg"
                alt="Ruracio Catering"
                className="img-fluid rounded mb-4"
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <h2 className="fw-bold">Burial Catering</h2>

        <p className="text-muted">
          Burial Catering
        </p>

        <p>
          Our burial catering service provides compassionate and respectful meal solutions for
          funeral services and memorial gatherings. We understand the sensitive nature of these
          events and offer comforting traditional meals that honor your loved one.
        </p>

        <p>
          From finger foods to full meals, we ensure everything is prepared with care and
          presented respectfully. We work with families to create suitable menus for guests.
        </p>

        <p>
          Our team ensures smooth service so you can focus on the ceremony while we handle catering.
        </p>


             

              

              

              {/* BUTTON */}
             
               <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>
              

              {/* SOCIALS */}
              <div className="d-flex gap-4 fs-4">

                

                

              </div>

            </div>

          </div>

          

        </div>

      </div>

    </div>
  );
};

export default BurialCatering;