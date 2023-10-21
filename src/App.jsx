import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import Work from './components/Card/Work'; // Import the Work component
import Contact from './components/Pages/Contact'; // Import the Contact component
import LinkCollect from './components/Pages/LinkCollect';
import Mama from './components/Pages/Mama';
import MetaOrange from './components/Pages/MetaOrange'
import Portfolio from './components/Pages/Portfolio'

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Work' element={<Work />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/linkcollect" element={<LinkCollect/>} />
            <Route path="/mama" element={<Mama/>} />
            <Route path="/metaorange" element={<MetaOrange/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

