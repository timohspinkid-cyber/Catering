import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
      <h1>Welcome to CateringPro 🍽️</h1>
      <p>Alice Outside Catering is the leading event planning company trusted for professional catering services.
        
      </p>
      <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>
    </div>
  )
}

export default home