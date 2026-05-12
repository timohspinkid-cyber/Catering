import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const services = () => {
  return (
  <div className='container-fluid py-4 bg-light'>

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
                <section className="row">
        

        <div className="col-md-12 text-center">
            
          <div className="card shadow">
            <div className="card-header">
              <h1 className='h1'>The best catering services </h1>
           </div>
          <div className="card-body">
        <p className="text-dark H1">
        There are special events in people’s lives and also in organizations that, when marked, there is a need to identify the best catering services to meet the catering needs for the function. When seeking ‘the best’, it means there are other catering companies in the industry that can offer catering services below standards or below your expectations.

Therefore, the way to go is choosing the best caterers in Nairobi, and that is where you will find Hauchi Kay catering service, Kenya’s top-ranked in the list. Anytime you choose our catering services for your private event, wedding, party, celebration of a personal milestone, bridal shower, or any other event, you and your guests will have a memorable dining experience. We ensure a lasting taste, unforgettable memory in every bite and sip!!
        </p>
         </div>
                

      </div>

        
        </div>
        

  

        

        
          


    </section>
                
     </div>
  </div>
)
}

export default services