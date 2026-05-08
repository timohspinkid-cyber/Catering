import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const BirthdayCatering = () => {
  return (
    <div>

     
        <div className="mt-3">

          <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>

        </div>

      

    </div>
  );
};

export default BirthdayCatering;