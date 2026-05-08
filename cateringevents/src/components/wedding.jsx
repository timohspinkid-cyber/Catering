import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const WeddingCatering = () => {
  return (
    <div>
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
          <h1 className="display-4 fw-bold">Wedding Catering</h1>

          
        </div>
      </div>

      

     

      

      {/* CONTENT */}
      <div className="container py-5">
      
        <div className="row">
      
          {/* LEFT SIDE */}
          <div className="col-md-12">
      
            <div className="bg-white shadow-sm rounded p-4">
      
              <img
                 src="/images/Wedding_Catering.jpg"
                 alt="Ruracio Catering"
                  className="img-fluid rounded mb-4"
                  style={{
                  height: "400px",
                  width: "100%",
                 objectFit: "cover",
                }}
              />
      
          <h2 className="fw-bold h1">Wedding Catering</h2>
      
         <p className="H1 fs-5 ">
          We provide full-service wedding catering with elegant menus designed to impress your guests.
          Whether you prefer a plated dinner or buffet-style service, we tailor everything to your event.
        </p>

        <p className="H1 fs-5 ">
          Our dishes include gourmet appetizers, main courses, and dietary-friendly options such as
          vegan, vegetarian, and gluten-free meals.
        </p>

        <p>
          We handle everything from preparation to presentation so you can enjoy your special day
          stress-free.
        </p>

       
                    
      
          {/* BUTTON */}
                   
        <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>
                    
      
        
      
                      
      
                      
      
          </div>
      
          </div>
      
        </div>
      
                
      
        </div>
      
      </div>
      
          
    
  );
};

export default WeddingCatering;