import React, { useState } from 'react';
import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkModeToggle } from './DarkMode';
import logo from '../components/images/logoEFP.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClickToggle = () => {
    setIsOpen(false);
  };

  // make sure that the title of each section shows on scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    // Get the navbar height
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const offset = navbarHeight;

    const sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });

    handleNavClickToggle();
  };

  return (
    <Navbar
      expand='lg'
      className=' sticky-top'
      expanded={isOpen}
      style={{ backgroundColor: 'rgb(255, 255, 255, 0.3)' }}
    >
      <Container>
        <Navbar.Brand href='#home' className='name'>
          <img
            alt='logo EFP'
            src={logo}
            style={{
              height: '40px',
              borderRadius: '25px',
              marginRight: '20px',
            }}
          />
          Ester Pelosof
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id='basic-navbar-nav' style={{ flexGrow: '0' }}>
          <Nav className='me-auto navItems' style={{ fontWeight: 'bold' }}>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('experience')}>
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('workExp')}>
              Work Experience
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <DarkModeToggle /> */}
      </Container>
    </Navbar>
  );
};

export default Navigation;
