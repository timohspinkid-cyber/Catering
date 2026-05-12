import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const BirthdayCatering = () => {
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
              <h1 className="display-4 fw-bold">Bithday Catering</h1>
    
              
            </div>
          </div>
    
          {/* MAIN CONTENT */}
          <div className="container py-5">
    
            <div className="row">
    
              {/* LEFT SIDE */}
              <div className="col-md-12">
    
                <div className="bg-white shadow-sm rounded p-4">
    
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
                    alt="Ruracio Catering"
                    className="img-fluid rounded mb-4"
                    style={{
                      height: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
    
                  <h2 className="fw-bold mb-3 H1">
                    Birthday Catering
                  </h2>
    
                  <p className="H1 fs-5 ">
                    Our Ruracio catering service delivers an authentic and
                    respectful culinary experience for Kikuyu traditional
                    ceremonies. We offer a menu featuring popular dishes
                    like nyama choma, mukimo, irio, traditional vegetables,
                    and local beverages, all prepared with care and cultural
                    sensitivity.
                  </p>
    
                  <p className=" H1 fs-5 ">
                    Planning a birthday party  is exciting, but it can also be stressful. From choosing a venue and inviting guests to organizing decorations and entertainment, there is a lot to handle. One of the most important parts of any celebration is the food.

Whether you are hosting a small gathering with close friends or a large celebration with many guests, professional birthday catering services in Nairobi can help make the process easier and stress-free.

Alice outside catering has a wide range of catering options, offering everything from traditional Kenyan dishes to continental meals, live cooking stations, and dessert setups. This guide helps you understand the available services, popular menu choices, pricing, and tips for selecting the right birthday caterer for your event.
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

export default BirthdayCatering;