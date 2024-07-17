import React from 'react'
import Home from './Page/Home/Home'
import Navbar from './Componenent/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
<> 
  <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
  </div> 
</>
   
  )
}

export default App