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

const Experience = () => {
  return (
    <Container>
      <h1
        style={{ marginLeft: '30px', marginBottom: '25px', marginTop: '-20px' }}
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
            <img src={mysqlIcon} alt='mysqlIcon' className='indivIcons' />
            <img
              src={javascriptIcon}
              alt='javascriptIcon'
              className='indivIcons'
            />
            <img src={nodeIcon} alt='nodeIcon' className='indivIcons' />
            <img src={reactIcon} alt='reactIcon' className='indivIcons' />
            <img src={cssIcon} className='indivIcons' alt='cssIcon' />
            <img
              src={handlebarIcon}
              alt='handlebarIcon'
              className='indivIcons'
            />
            <img src={htmlIcon} alt='htmlIcon' className='indivIcons' />
            <img src={mongoIcon} alt='mongoIcon' className='indivIcons' />
            {/* </div> */}
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h2 className='titles' style={{ marginBottom: '30px' }}>
            Languages
          </h2>
          <Row>
            <Col xs={6}>
              <ul className='languages '>
                <li>English</li>
                <li>Greek</li>
                <li>Spanish</li>
                <li>Hebrew</li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul className='languages'>
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
