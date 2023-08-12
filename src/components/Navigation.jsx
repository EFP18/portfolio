import React from 'react';
import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary sticky-top'>
      <Container>
        <Navbar.Brand href='#home' className='name'>
          Ester Pelosof
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' style={{ flexGrow: '0' }}>
          <Nav className='me-auto navItems' style={{ fontSize: '30px' }}>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
