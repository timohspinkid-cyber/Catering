import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const aboutus = () => {
  return (
    <div>
       <h1>About Us</h1>
       <h1 className=''>WHO WE ARE</h1>
       <br />
      <p>
        CateringPro has over 10 years of experience delivering high-quality food
        services for weddings, corporate events, and private parties
        <br />
        One of the key bennefits of <b>Alice Outside catering</b> is the increased capacity to cater to larger events and handle multiple events simultaneously.
        <br />
        The  combined resources of <b>Alice Outside catering</b> will ensure that every event ,weather  it`s corporate function ,wedding  or private party , is executed flawlessly.
        <br />
        In conclusion <b>Alice Outside catering</b>  marks a significant milestone in the catering industry .
        <br />
        This union will result in a event  stronger and culinary  delights to its  valued customers.

        </p>
        <Link to='/contactus' className='btn btn-success text-white m-4 btn-outline-info'>Contact</Link>

          

        

    </div>
  )
}

export default aboutus