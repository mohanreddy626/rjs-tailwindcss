
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About  from './About';
import Home from './Home';
import  Services  from './Services';
import Contact from './Contact';

function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
