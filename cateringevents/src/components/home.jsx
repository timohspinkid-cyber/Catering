import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

const home = () => {
  return (
    <div>
      
      <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="/images/cooking-removebg-preview.png" 
                alt="Slide 1" 
                className="w-100 d-block" 
                style={{ height: '300px', width: '450px', objectFit: 'cover' }} 
              />
              <div className='carousel-caption d-none d-md-block'>
                <h1 className=''>Alice Otside catering Welcome to CateringPro </h1>
              </div>
            </div>
            
              
            
            
            </div>
      <p className=''>Alice Outside Catering is the leading event planning company trusted for professional catering services.


        

             
       <section className="row">

        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
              <h1 className='h1'>Graduation Catering</h1>
           </div>
          <div className="card-body">
            <p className="H1 fs-5 ">
              Celebrate a major milestone with a feast as bright as the graduate's future. Our graduation packages feature vibrant, crowd-pleasing options like gourmet burger bars, taco stations, and celebratory dessert spreads with themed treats. We provide flexible, high-energy catering that keeps the focus on the graduate's hard-earned success.

            </p>
          </div>
                

      </div>

        
        </div>
        

  

        

        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
               <h1 className='h1'>
                Wedding Catering
                </h1>
              
            </div>
            <div class="card-body">
            
            </div>
            <p className="H1 fs-5 ">
              Transform your special day into a culinary masterpiece. We craft bespoke wedding menus ranging from formal multi-course plated dinners to elegant buffets and interactive food stations. Our team handles every detail—from the initial tasting to the final toast—ensuring a seamless, stress-free experience that leaves your guests raving for years.
              </p>
            </div>

        
        </div>
        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
                <h1 className='h1'>
                Ruracio Catering
              </h1>
            </div>
            <div class="card-body">
               <p className="H1 fs-5 ">
                Our Ruracio catering service delivers an authentic and
                respectful culinary experience for Kikuyu traditional
                ceremonies. We offer a menu featuring popular dishes
                like nyama choma, mukimo, irio, traditional vegetables,
                and local beverages, all prepared with care and cultural
                sensitivity.
              </p>
            
          </div>
           
           
          </div>
          </div>


    
    

        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
              <h1 className='h1'>Birthday Catering</h1>
           </div>
          <div className="card-body">
            <p className="H1 fs-5 ">
               From whimsical kids' parties to sophisticated adult soirées, we bring the flavor to your birthday bash. Choose from playful finger foods, interactive live cooking stations, or elegant grazing tables designed for mingling. We handle the food, service, and cleanup so you can stay in the moment and enjoy your celebration to the fullest.

            </p>
          </div>
                

      </div>

        
        </div>
        

  

        

        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
               <h1 className='h1'>
                Burial Catering
                </h1>
              
            </div>
            <div class="card-body">
            
            </div>
            <p className="H1 fs-5 ">
              In moments of loss, let us provide the comfort of a warm, nourishing meal. We offer dignified and compassionate catering services for burials and memorials, handling all logistics with quiet efficiency. Our team ensures that your guests are well cared for with hearty, respectful menus, allowing you the space to focus on honoring your loved one.
              </p>
            </div>

        
        </div>
        <div className="col-md-6 text-center">
            
          <div className="card shadow card">
            <div className="card-header">
               <h1 className='h1'>
                conference Catering
                </h1>
              
            </div>
            <div class="card-body">
            
            </div>
            <p className="H1 fs-5 ">
              In moments of loss, let us provide the comfort of a warm, nourishing meal. We offer dignified and compassionate catering services for burials and memorials, handling all logistics with quiet efficiency. Our team ensures that your guests are well cared for with hearty, respectful menus, allowing you the space to focus on honoring your loved one.
              </p>
            </div>

        
        </div>
        

        


    </section>
    
    

        
      </p>
      <Link to='/book' className='btn btn-success text-white m-4 btn-outline-info'>Booking</Link>
    </div>
  )
}

export default home