import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headshot from './images/headshotPortfolio.png';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Container className='mb-5 mt-4'>
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
          <Card body className='border-0' style={{ fontSize: '1.2rem' }}>
            Linguist turned coder! I studied Linguistics at the University of
            Groningen in the Netherlands. I'm really passionate about studying
            different languages, and I find the creation of different structures
            and sentences very interesting, which is why I decided to study
            programming languages and coding. Back in 2019 I created a website
            using Google Sites. Seeing the final product after all the hard work
            gave me a sense of fulfillment, so I took the next step towards
            becoming a Full Stack Web Developer.
          </Card>
          <Card body className='border-0' style={{ fontSize: '1.2rem' }}>
            Back in 2019 I created a website using Google Sites. Seeing the
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
