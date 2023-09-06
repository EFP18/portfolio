import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import mysqlIcon from './images/icons8-mysql-96.png';
import javascriptIcon from './images/icons8-javascript-96.png';
import nodeIcon from './images/icons8-nodejs-96.png';
import reactIcon from './images/icons8-react-native-96.png';
import cssIcon from './images/icons8-css-96.png';
import handlebarIcon from './images/icons8-handlebar-96.png';
import htmlIcon from './images/icons8-html-96.png';
import mongoIcon from './images/icons8-mongodb-96.png';
import resume from './images/resume.pdf';
import '../styles/Experience.css';
import { Zoom } from 'react-awesome-reveal';
import { Bounce } from 'react-awesome-reveal';

const Experience = () => {
  return (
    <Container>
      <h1
        style={{
          marginLeft: '30px',
          marginBottom: '30px',
          // marginTop: '-20px',
          color: 'rgb(73, 97, 120)',
          fontWeight: 'bold',
        }}
        id='experience'
        className='experienceTitle'
      >
        Experience
      </h1>
      <Row style={{ marginBottom: '50px' }}>
        <Col xs={12} md={6} lg={6}>
          <h2 className='titles' style={{ marginBottom: '30px' }}>
            Skills
          </h2>
          <div className='icons'>
            <Bounce>
              <img src={mysqlIcon} alt='mysqlIcon' className='indivIcons' />
            </Bounce>
            <Bounce>
              <img
                src={javascriptIcon}
                alt='javascriptIcon'
                className='indivIcons'
              />{' '}
            </Bounce>
            <Bounce>
              <img src={nodeIcon} alt='nodeIcon' className='indivIcons' />
            </Bounce>

            <Bounce>
              <img src={reactIcon} alt='reactIcon' className='indivIcons' />
            </Bounce>
            <Bounce>
              <img src={cssIcon} className='indivIcons' alt='cssIcon' />
            </Bounce>
            <Bounce>
              <img
                src={handlebarIcon}
                alt='handlebarIcon'
                className='indivIcons'
              />
            </Bounce>
            <Bounce>
              <img src={htmlIcon} alt='htmlIcon' className='indivIcons' />
            </Bounce>
            <Bounce>
              <img src={mongoIcon} alt='mongoIcon' className='indivIcons' />
            </Bounce>
            {/* </div> */}
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h2 className='titles' style={{ marginBottom: '30px' }}>
            Languages
          </h2>
          <Row>
            <Col className='languages'>
              <ul>
                <li>English</li>
                <li>Greek</li>
                <li>Spanish</li>
                <li>Hebrew</li>
              </ul>
            </Col>
            <Col className='languages'>
              <ul>
                <li>Italian</li>
                <li>French</li>
                <li>Dutch</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <h2
          className='titles educationSection'
          style={{ marginBottom: '30px' }}
        >
          Education
        </h2>
        <Zoom triggerOnce>
          <Card className='shadow-lg p-3 mb-4 bg-white rounded-5'>
            <Card.Body>
              <Card.Title className='educationTitle'>
                Full Stack Web Development
              </Card.Title>
              <Card.Text className='educationTimeline'>
                Vanderbilt, 2023
              </Card.Text>
            </Card.Body>
          </Card>
        </Zoom>
        <Zoom triggerOnce>
          <Card className='shadow-lg p-3 mb-5 bg-white rounded-5'>
            <Card.Body>
              <Card.Title className='educationTitle'>
                European Languages and Cultures
              </Card.Title>
              <Card.Text className='educationTimeline'>
                University of Groningen, 2017
              </Card.Text>
            </Card.Body>
          </Card>
        </Zoom>
      </Row>
      <Row>
        <Button className='resumeBtn'>
          <a
            href={resume}
            target='_blank'
            rel='noreferrer'
            className='buttonText'
            style={{ width: 'auto' }}
          >
            View full resume
          </a>
        </Button>
      </Row>
    </Container>
  );
};

export default Experience;
