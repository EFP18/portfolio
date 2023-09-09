import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headshot from './images/headshotEFP.jpg';
import Card from 'react-bootstrap/Card';
import '../styles/About.css';
import { Zoom } from 'react-awesome-reveal';

const About = () => {
  return (
    <Container className='mb-5 mt-4'>
      <h1
        id='about'
        className='aboutTitle'
        style={{
          marginLeft: '30px',
          marginBottom: '30px',
          marginTop: '30px',
          color: 'rgb(73, 97, 120)',
          fontWeight: 'bold',
        }}
      >
        About
      </h1>
      <Row>
        <Col
          xs={12}
          md={4}
          lg={3}
          className='d-flex align-items-center justify-content-center'
        >
          <Image
            src={headshot}
            roundedCircle
            fluid
            className='headshot'
            style={{ height: '220px', marginTop: '20px' }}
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Zoom triggerOnce>
            <Card
              body
              className='border-0 aboutMe shadow-lg rounded-5'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            >
              <p>
                Linguist turned coder! I have always loved studying different
                languages, and I find the creation of different structures and
                sentences very interesting, which is why I decided to study
                programming languages and coding. Prior to that, I studied
                Linguistics at the University of Groningen in the Netherlands,
                and worked in translations for several years.
              </p>
              <p>
                Back in 2022 I created a website using Google Sites. Seeing the
                final product after all the hard work gave me a sense of
                fulfillment, so I took the next step towards becoming a Full
                Stack Web Developer.
              </p>
            </Card>
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
