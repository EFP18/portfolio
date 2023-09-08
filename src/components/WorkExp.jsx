import React from 'react';
import '../styles/WorkExp.css';
import { Card, Container } from 'react-bootstrap';
import dendro from '../components/images/dendroTree.png';
import { Link } from 'react-router-dom';

const WorkExp = () => {
  return (
    <Container className='mb-5 mt-4'>
      <h1
        id='workExp'
        className='workExpTitle'
        style={{
          marginLeft: '30px',
          marginBottom: '30px',
          marginTop: '30px',
          color: 'rgb(73, 97, 120)',
          fontWeight: 'bold',
        }}
      >
        Work Experience
      </h1>
      {/* <div class='card mb-3'> */}
      <Card
        className='cardDendro shadow-lg'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5',
          border: 'none',
          borderRadius: '40px',
        }}
      >
        <div class='row no-gutters'>
          <div class='col-md-4'>
            <Link to='//www.dendrotreecare.com'>
              <img
                src={dendro}
                class='card-img'
                alt='Image of a website I built for a company called Dendro Tree Care'
                style={{ height: '100%' }}
              />
            </Link>
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <Card.Title style={{ marginBottom: '10px', fontSize: '22px' }}>
                Dendro Tree Care
              </Card.Title>
              <Card.Body class='card-text' style={{ marginBottom: '30px' }}>
                Web Development, SEO, and much more. I built a dynamic website
                for Dendro Tree Care, combining great design with user-friendly
                functionality.
              </Card.Body>
              <Link to='//www.dendrotreecare.com' style={{ color: 'black' }}>
                Click here to see the final result!
              </Link>
              <p class='card-text'>
                <small class='text-muted'>May 2023 - Current</small>
              </p>
            </div>
          </div>
        </div>
      </Card>
      {/* </div> */}
    </Container>
  );
};

export default WorkExp;
