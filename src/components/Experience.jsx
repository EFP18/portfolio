import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headshot from './images/headshotPortfolio.png';

const About = () => {
  return (
    <Container>
      {/* create a row in the page that will have 2 columns, one for the headshot and one for the bio */}
      <Row>
        <img
          src={headshot}
          className='rounded-circle headshot'
          alt='headshot'
          style={{
            height: '150px',
            marginLeft: '50px',
            width: '130px',
          }}
        />
        <Col sm={10}>
          <div className='mb-3 ml-4 position-fixed'>
            <div className='card-body'>
              <h5 className='card-title cardTitle mb-4'>
                Hey! My name is Ester!
              </h5>
              <p className='card-text'>
                Very methodical and hard working, I enjoy solving puzzles and
                answering complex questions. I am very passionate about
                languages and I'm very interested in learning some programming
                languages as well, to combine them with creativity. I am very
                eager to learn, well-organized, and I work very well with
                deadlines.
              </p>
              <p className='card-text'>
                I studied Linguistics at the University of Groningen in the
                Netherlands. I'm really passionate about studying different
                languages, and I find the creation of different structures and
                sentences very interesting, which is why I decided to study
                programming languages and coding.
              </p>
              <p className='card-text'>
                <small className='text-muted'>
                  Contact me for more information!!
                </small>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
