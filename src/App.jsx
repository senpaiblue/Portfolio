import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import Work from './components/Card/Work'; // Import the Work component
import Contact from './components/Pages/Contact'; // Import the Contact component
import LinkCollectPage from './components/Pages/LinkCollect';
import MamaPage from './components/Pages/Mama';
import MetaOrangePage from './components/Pages/MetaOrange'
import PortfolioPage from './components/Pages/Portfolio'
import WorkPage from './components/Pages/WorkPage'

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Work' element={<WorkPage />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/linkcollect" element={<LinkCollectPage/>} />
            <Route path="/mama" element={<MamaPage/>} />
            <Route path="/metaorange" element={<MetaOrangePage/>} />
            <Route path="/portfolio" element={<PortfolioPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

