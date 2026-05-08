import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const aboutus = () => {
  return (
    
    <div className="col-md-12 text-center text-white">
      <section className="row">
      <div className="col-md-12">
        
        {/* Carousel Container */}
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="/images/Catering-services-1.jpg" 
                alt="Slide 1" 
                className="w-100 d-block" 
                style={{ height: '300px', width: '500px', objectFit: 'cover' }} 
              />
            </div>
            
              
            
            
            </div>
            

          
          
        </div>
      </div>
    </section>
       
      
     <section className="row">

        <div className="col-md-6 text-center">
            
          <div className="card shadow">
            <div className="card-header">
              <h1 className='h1'>WHO WE ARE</h1>
           </div>
          <div className="card-body">
        <p className="text-dark H1">
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
         </div>
                

      </div>

        
        </div>
        

  

        

        <div className="col-md-6 text-center">
            
          <div className="card shadow">
            <div className="card-header">
                <h2 className='h1'>OUR MISSION</h2>
            </div>
            <div class="card-body">
                <p className='H1'>The mission of the Alice Outside catering is to provide companies with the highest level of event planning. We exist to attract and maintain customers. When we adhere to this maxim, everything else will fall into place. Our services will exceed the expectations of our customers.
              <br />
              We listen to their needs and work with them to create the event of their dreams. Our clients’ wishes become our commands. So whether our client wants a Modern, Western, Tropical, Las Vegas or just more traditional wedding/event, we can help. 
               <br />
              Our services include Corporate events, weddings, receptions, Graduation and Catering services.</p>
              </div>
                

            </div>

        
        </div>

    </section>
        <Link to='/contactus' className='btn btn-success text-white m-4 btn-outline-info'>Contact</Link>

          

        

    </div>
  )
}

export default aboutus