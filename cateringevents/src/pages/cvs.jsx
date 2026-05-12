// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useState } from 'react'

// import Home from './components/home';
// import Services from './components/services';
// import About from './components/aboutus';
// import Gallery from './components/gallery';
// import Contact from './components/contactus';
// import Booking from './components/booking';
// import SignIn from './components/signin';
// import SignUp from './components/signup';
// import RuracioCatering from './components/Ruracios';
// import BurialCatering from './components/Burials';
// import WeddingCatering from './components/wedding';
// import BirthdayCatering from './components/Birthday';
// import GraduationCatering from './components/Graduation';
// import ChatBot from './components/chatbot';
// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   return (
//     <Router>

//     <div className="App">
     
//       <nav className='App-header navbar navbar-expand-lg '>
//         <div className='container-fliud'>
//           <a href='#' className='navbar-brand d-flex align-items-center'>
//             <div>
//               <img src="/images/favicon.ico" alt="" />
//             </div>
//             <span className='ms-2'>Alice Outside catering</span>
//           </a>
//             <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarcollapse"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>


//         </div>
        
//       <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Home</Link>
//       <Link to='/aboutus' className='btn btn-success text-white m-4 btn-outline-info'>Aboutus</Link>


//       <nav className="navbar navbar-expand-lg navbar-success   bg-success px-1  btn btn-success text-white m-4 btn-outline-info">

//         {/* Brand */}
//         <Link className="navbar-brand fw-bold text-white" to="/services">
//           Services
//         </Link>

//         {/* Toggle (mobile) */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Nav Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">

//             {/* Dropdown */}
//             <li className="nav-item dropdown">

//               {/* ✅ Visible text + arrow ALWAYS visible */}
//               <a
//                 className="nav-link dropdown-toggle text-white d-flex align-items-center"
//                 href="#"
//                 id="servicesDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//               >
                
//               </a>

//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to='/wedding' className='dropdown-item'>wedding</Link>
//                 </li>
//                 <li>
//                   <Link to='/ruracio' className='dropdown-item'>Ruracio</Link>
                  
//                 </li>
//                 <li>
//                   <Link to='/birthday' className='dropdown-item'>Birthday</Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/burial">
//                     Burial
//                   </Link>
//                 </li>
//                 <li>
//                    <Link to='/graduation' className='dropdown-item'>Graduation</Link>
//                 </li>
                
                
//               </ul>

//             </li>

//           </ul>
//         </div>
//       </nav>
//     <Link to='/gallery' className='btn btn-success text-white m-4 btn-outline-info'>Gallery</Link>
//       <Link to='/contact' className='btn btn-success text-white m-4 btn-outline-info'>ContactUs</Link>
//       <Link to='/signin' className='btn btn-success text-white m-4 btn-outline-info'>SignIn</Link>
//       <Link to='/signup' className='btn btn-success text-white m-4 btn-outline-info'>SignUp</Link>
      


//        </nav>

//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/services' element={<Services/>}/>
//       <Route path='/aboutus' element={<About/>}/>
//       <Route path='/gallery' element={<Gallery/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/signin' element={<SignIn />} />
//       <Route path='/signup' element={<SignUp />} />
//       <Route path="/book" element={<Booking/>} />
//       <Route path="/wedding" element={<WeddingCatering/>} />
//       <Route path="/ruracio" element={<RuracioCatering/>} />
//       <Route path="/burial" element={<BurialCatering/>} />
//       <Route path="/birthday" element={<BirthdayCatering/>} />
//       <Route path='/graduation'element={<GraduationCatering/>}/>
//       <Route path='/chatbot'element={<ChatBot/>}/>
      
      
      
      
      

//     </Routes>



    
//       <section className="row bg-success p-3">
//   <div className="col-md-12 text-center">
//     <h3 className="text-white">Stay connected</h3>
//     <h5 className="text-white">Visit our websites @</h5>

//     {/* Social Icons Row */}
//     <div className="d-flex justify-content-center align-items-center gap-4 mt-3">

//       <a href="https://www.facebook.com
// " target="_blank" rel="noreferrer">
//         <img src="/images/fb.png" alt="Facebook" width="40" />
//       </a>

//       <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
//         <img src="/images/instagram.jpeg" alt="Instagram" width="40" />
//       </a>

//       <a href="https://www.x.com" target="_blank" rel="noreferrer">
//         <img src="/images/x.png" alt="Twitter" width="40" />
//       </a>
//       <a href="https://wa.me/254707726620"
//         target="_blank"
//         rel="noreferrer"
//         className="text-success"
//       >
//           <img src="/images/whatapp.png" alt="Twitter" width="40" />
              
//       </a>

//     </div>
//   </div>
// </section>

//       {/* Footer */}
//       <footer className="bg-dark p-3">
//         <p className="text-white text-center">
//           Developed by Timothy Mwendwa © All rights reserved
//         </p>
//       </footer>
      

      
    
//     </div> 
//     </Router>
    
        
    
    
    
//   );
  
  
// }

// export default App;




// import React, { useState } from "react";

// function ChatBot() {

//   // OPEN/CLOSE CHAT
//   const [openChat, setOpenChat] = useState(false);

//   // INPUT MESSAGE
//   const [message, setMessage] = useState("");

//   // CHAT HISTORY
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text:
//         "👋 Hello! Welcome to Smart Spare Parts Marketplace. How can I help you today?"
//     }
//   ]);

//   // SEND MESSAGE
//   const sendMessage = () => {

//     // EMPTY INPUT
//     if (!message.trim()) return;

//     const userText = message;

//     // CONVERT TO LOWERCASE
//     const userMessage = message.toLowerCase();

//     let botReply = "";

//     // GREETINGS
//     if (
//       userMessage.includes("hello") ||
//       userMessage.includes("hi") ||
//       userMessage.includes("hey")
//     ) {

//       botReply =
//         "👋 Hello! Welcome to Smart Spare Parts Marketplace.";

//     }

//     // BRAKES
//     else if (
//       userMessage.includes("brake") ||
//       userMessage.includes("brakes")
//     ) {

//       botReply =
//         "✅ Brake pads and brake discs are available.";

//     }

//     // ENGINE
//     else if (userMessage.includes("engine")) {

//       botReply =
//         "⚙️ Engine parts are available.";

//     }

//     // BATTERY
//     else if (
//       userMessage.includes("battery") ||
//       userMessage.includes("batteries")
//     ) {

//       botReply =
//         "🔋 Car batteries are available.";

//     }

//     // OIL
//     else if (
//       userMessage.includes("oil") ||
//       userMessage.includes("lubricant")
//     ) {

//       botReply =
//         "🛢️ Engine oils are available.";

//     }

//     // PRICE
//     else if (
//       userMessage.includes("price") ||
//       userMessage.includes("cost")
//     ) {

//       botReply =
//         "💰 Prices depend on the spare part type.";

//     }

//     // DELIVERY
//     else if (
//       userMessage.includes("delivery") ||
//       userMessage.includes("shipping")
//     ) {

//       botReply =
//         "🚚 We offer countrywide delivery.";

//     }

//     // LOCATION
//     else if (
//       userMessage.includes("location") ||
//       userMessage.includes("where are you")
//     ) {

//       botReply =
//         "📍 We are located in Nairobi, Kenya.";

//     }

//     // THANKS
//     else if (
//       userMessage.includes("thanks") ||
//       userMessage.includes("thank you")
//     ) {

//       botReply =
//         "😊 You're welcome!";

//     }

//     // DEFAULT
//     else {

//       botReply =
//         "🤖 Sorry, I didn't understand that.";

//     }

//     // UPDATE CHAT
//     setMessages((prevMessages) => [
//       ...prevMessages,

//       {
//         sender: "user",
//         text: userText
//       },

//       {
//         sender: "bot",
//         text: botReply
//       }
//     ]);

//     // CLEAR INPUT
//     setMessage("");
//   };

//   return (

//     <>

//       {/* CHAT BUTTON */}
//       <button
//         className="btn btn-primary rounded-circle shadow"
//         onClick={() => setOpenChat(!openChat)}
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           width: "60px",
//           height: "60px",
//           fontSize: "24px",
//           zIndex: 1000
//         }}
//       >
//         💬
//       </button>

//       {/* CHATBOX */}
//       {openChat && (

//         <div
//           className="card shadow-lg border-0"
//           style={{
//             borderRadius: "20px",
//             width: "350px",
//             position: "fixed",
//             bottom: "90px",
//             right: "20px",
//             overflow: "hidden",
//             background: "white",
//             zIndex: 1000
//           }}
//         >

//           {/* HEADER */}
//           <div
//             className="p-3 d-flex justify-content-between align-items-center"
//             style={{
//               background:
//                 "linear-gradient(90deg,#0f2027,#203a43,#2c5364)",
//               color: "white"
//             }}
//           >

//             <h5 className="fw-bold m-0">
//               🤖 SpareBot Assistant
//             </h5>

//             <button
//               className="btn btn-sm btn-light"
//               onClick={() => setOpenChat(false)}
//             >
//               ✖
//             </button>

//           </div>

//           {/* CHAT AREA */}
//           <div
//             style={{
//               height: "350px",
//               overflowY: "auto",
//               padding: "15px",
//               background: "#f8f9fa"
//             }}
//           >

//             {messages.map((msg, index) => (

//               <div
//                 key={index}
//                 className={
//                   msg.sender === "user"
//                     ? "text-end"
//                     : "text-start"
//                 }
//               >

//                 <div
//                   style={{
//                     display: "inline-block",
//                     padding: "10px 15px",
//                     borderRadius: "15px",
//                     marginBottom: "10px",
//                     maxWidth: "80%",
//                     background:
//                       msg.sender === "user"
//                         ? "#0d6efd"
//                         : "#e9ecef",
//                     color:
//                       msg.sender === "user"
//                         ? "white"
//                         : "black"
//                   }}
//                 >

//                   {msg.text}

//                 </div>

//               </div>

//             ))}

//           </div>

//           {/* INPUT AREA */}
//           <div className="p-3 border-top">

//             <div className="d-flex gap-2">

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Ask something..."
//                 value={message}
//                 onChange={(e) =>
//                   setMessage(e.target.value)
//                 }
//                 onKeyDown={(e) => {

//                   if (e.key === "Enter") {

//                     sendMessage();
//                   }
//                 }}
//               />

//               <button
//                 className="btn btn-primary"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>

//             </div>

//           </div>

//         </div>

//       )}

//     </>

//   );
// }

// export default ChatBot;
