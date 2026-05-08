import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaWhatsapp,
  
} from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const RuracioCatering = () => {
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
          <h1 className="display-4 fw-bold">Ruracio Catering</h1>

          
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
                Ruracio Catering
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
                Our team understands the significance of Ruracio and
                ensures that the food presentation and service uphold
                the dignity of the occasion. Whether held at home or a
                hired venue, we manage everything from food prep to
                final cleanup, so families can focus on the ceremony.
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

export default RuracioCatering;