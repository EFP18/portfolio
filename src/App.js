import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WorkExp from './components/WorkExp';
import './styles/App.css';
import background from './components/images/background1.jpg';

const App = () => {
  return (
    <div className='App'>
      <div
        className='backgroundImage'
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      {/* anything between the browserrouter tag is react router dom functionality */}
      <HashRouter>
        <Navigation />
        <About />
        <Experience />
        <WorkExp />
        <Projects />
        <Contact />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
