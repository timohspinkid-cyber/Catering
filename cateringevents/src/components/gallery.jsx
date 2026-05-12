import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const gallery = () => {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          
          <img src="/images/awayhome-catarers-removebg-preview.png" 
            alt="Slide 1" className="w-100 d-block"  style={{ height: '300px', width: '450px', objectFit: 'cover' }} />
          <div className='carousel-caption d-none d-md-block'>
            <h1 className=''>Showcasing our culinary excellence and memorable events</h1>
          </div>
        </div>
    </div>
      

      
    <section className="row">
      <h1 className='h1'>Our Gallery</h1>

      {/* Card 1 */}
      <div className="col-md-4">
        <div className="text-center">
          
          <div className="card-body">
            <img
              src="/images/istockphoto6.jpg"
              alt="Hand painted floral cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="text-center">
          

          <div className="card-body">
            <img
              src="/images/istockphoto1.webp"
              alt="Open rose cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="text-center">
         

          <div className="card-body">
            <img
              src="/images/istockphoto2.jpg"
              alt="Smooth buttercream cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className=" text-center">
          
          <div className="card-body">
            <img
              src="/images/istockphoto3.jpg"
              alt="Hand painted floral cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-4">
        <div className="text-center">
          

          <div className="card-body">
            <img
              src="/images/istockphoto4.jpg"
              alt="Open rose cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-4">
        <div className="text-center">
         

          <div className="card-body">
            <img
              src="/images/istockphoto5.jpg"
              alt="Smooth buttercream cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="text-center">
          
          <div className="card-body">
            <img
              src="/images/istockphoto5.jpg"
              alt="Hand painted floral cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="text-center">
          

          <div className="card-body">
            <img
              src="/images/cooking-removebg-preview.png"
              alt="Open rose cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="text-center">
         

          <div className=" card-shadow card-body">
            <img
              src="/images/istockphoto7.jpg"
              alt="Smooth buttercream cake"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>

    </section>
  



      
    </div>
    
  )
}

export default gallery