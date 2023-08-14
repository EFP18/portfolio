import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headshot from './images/headshotPortfolio.png';
import Card from 'react-bootstrap/Card';
import '../styles/About.css';

const About = () => {
  return (
    <Container className='mb-5 mt-4'>
      <h1
        id='about'
        className='aboutTitle'
        style={{ marginLeft: '30px', marginBottom: '30px', marginTop: '30px' }}
      >
        About
      </h1>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Image
            src={headshot}
            roundedCircle
            fluid
            style={{ height: '250px', marginLeft: '20px', marginTop: '30px' }}
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Card body className='border-0 aboutMe' style={{ fontSize: '1.2rem' }}>
            Linguist turned coder! I have always loved studying different
            languages, and I find the creation of different structures and
            sentences very interesting, which is why I decided to study
            programming languages and coding. Prior to that, I studied
            Linguistics at the University of Groningen in the Netherlands, and
            worked in translations for several years.
          </Card>
          <Card body className='border-0 aboutMe' style={{ fontSize: '1.2rem' }}>
            Back in 2022 I created a website using Google Sites. Seeing the
            final product after all the hard work gave me a sense of
            fulfillment, so I took the next step towards becoming a Full Stack
            Web Developer.
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;