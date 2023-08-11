import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headshot from './images/headshotPortfolio.png';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Container className='mb-5 mt-4'>
      <Row>
        <Col xs={12} md={3} lg={3}>
          <Image
            src={headshot}
            roundedCircle
            fluid
            style={{ height: '250px', marginLeft: '20px'}}
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Card body className='border-0'>
            Very methodical and hard working, I enjoy solving puzzles and
            answering complex questions. I am very passionate about languages
            and I'm very interested in learning some programming languages as
            well, to combine them with creativity. I am very eager to learn,
            well-organized, and I work very well with deadlines.
          </Card>
          <Card body className='border-0'>
            I studied Linguistics at the University of Groningen in the
            Netherlands. I'm really passionate about studying different
            languages, and I find the creation of different structures and
            sentences very interesting, which is why I decided to study
            programming languages and coding.
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
