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

  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary sticky-top'
      expanded={isOpen}
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
          <Nav className='me-auto navItems'>
            <Nav.Link href='#about' onClick={handleNavClickToggle}>
              About
            </Nav.Link>
            <Nav.Link href='#experience' onClick={handleNavClickToggle}>
              Experience
            </Nav.Link>
            <Nav.Link href='#projects' onClick={handleNavClickToggle}>
              Projects
            </Nav.Link>
            <Nav.Link href='#contact' onClick={handleNavClickToggle}>
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
