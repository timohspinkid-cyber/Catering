import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Services from './components/services';
import About from './components/aboutus';
import Gallery from './components/gallery';
function App() {
  return (
    <Router>


    <div className="App">
      <header className="App-header">
        <h1>Alice Outside Catering</h1>
      </header>
      <nav>

      
      <Link to='/services' className='btn btn-success text-white m-4 btn-outline-info'>Services</Link>
      <Link to='/aboutus' className='btn btn-success text-white m-4 btn-outline-info'>Aboutus</Link>
      <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Home</Link>
      <Link to='/gallery' className='btn btn-success text-white m-4 btn-outline-info'>Gallery</Link>
      <Link to='/contact' className='btn btn-success text-white m-4 btn-outline-info'>Contact Us</Link>
      



      </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>


    </Routes>
      

    </div>
    
    </Router>
  );
  
}

export default App;
