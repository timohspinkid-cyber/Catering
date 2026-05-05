import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>Photos of our catering services will appear here.</p>
      <img src="images/awayhome-catarers.jpg" alt="" style={{ width: "300px", borderRadius: "10px" }}/>
            
  
      <img src="images/catering-companies-in-nairobi.jpg"alt="" style={{ width: "300px", borderRadius: "10px" }}    />
        
            
      <img  src="images/catering-services.jpg" alt="" style={{ width: "300px", borderRadius: "10px" }} />




      <Link to='/contactus' className='btn btn-success text-white m-4 btn-outline-info'>Contact</Link>

    </div>
    
  )
}

export default gallery