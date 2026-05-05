import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const services = () => {
  return (
    <div className=''>
      <p className='text-center'>Alice Outside Catering offers professional catering services across Kenya, tailored for weddings,Ruracials,Burials,Conferences and Graduations. <br/>
      Our catering team delivers full-course meals, buffets,desserts, and live cooking stations designed to match your event style and guest preferences.<br/> 
      We provide proteins, starches, vegetables, fresh fruits, beverages, and custom menu creations that guarantee both taste and presentation.<br/>
      Whether it’s 50 guests or 5,000, we ensure seamless catering with elegant setups, reliable service, and unforgettable dining experiences.<br/>
     Choose Alice Outside catering for the best catering  in Kenya.</p>
      <h1>Our Services</h1>

      <div id="weddings">
        <h2>Weddings</h2>
        <p>Elegant catering for your special day.</p>
      </div>

      <div id="corporate">
        <h2>Corporate Events</h2>
        <p>Professional catering for business meetings.</p>
      </div>

      <div id="parties">
        <h2>Private Parties</h2>
        <p>Celebrate birthdays and events with great food.</p>
      </div></div>
  )
}

export default services