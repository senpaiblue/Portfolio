import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import Work from './components/Card/Work'; // Import the Work component
import Contact from './components/Pages/Contact'; // Import the Contact component

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Work' element={<Work />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

