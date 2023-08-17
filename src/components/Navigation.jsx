import React, { useState } from 'react';
import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
