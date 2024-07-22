import React from 'react'
import Home from './Page/Home/Home'
import Navbar from './Componenent/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import Footer from './Componenent/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
<> 
  <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
  </div> 
</>
   
  )
}

export default App