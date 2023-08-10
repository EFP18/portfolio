import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className='App'>
      {/* anything between the browserrouter tag is react router dom functionality */}
      <HashRouter>
        <Navigation />
        <Experience />
        {/* conditionally rendered routes */}
        <Routes>
          {/* when on localhost:3000 / route, only display the Home page */}
          {/* endpoints */}
          {/* <Route path='/' element={<AboutMe />} /> */}
          {/* <Route path='/Portfolio' element={<Portfolio />} /> */}
          {/* <Route path='/Resume' element={<Resume />} /> */}
          {/* <Route path='/Contact' element={<ContactForm />} /> */}
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </div>
  );
};

export default App;
