import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mysqlIcon from './images/icons8-mysql-96.png';
import javascriptIcon from './images/icons8-javascript-96.png';
import nodeIcon from './images/icons8-nodejs-96.png';
import reactIcon from './images/icons8-react-native-96.png';
import cssIcon from './images/icons8-css-96.png';
import expressIcon from './images/icons8-express-js-96.png';
import handlebarIcon from './images/icons8-handlebar-96.png';
import htmlIcon from './images/icons8-html-96.png';
import mongoIcon from './images/icons8-mongodb-96.png';
import resume from './images/resume.pdf';

const Experience = () => {
  return (
    <Container>
      <Row style={{ marginBottom: '50px' }}>
        <Col xs={12} md={6} lg={6}>
          <h1 style={{ marginBottom: '30px' }}>Skills</h1>
          <div style={{ marginLeft: 'auto' }}>
            <img
              src={mysqlIcon}
              alt='mysqlIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={javascriptIcon}
              alt='javascriptIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={nodeIcon}
              alt='nodeIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={reactIcon}
              alt='reactIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={expressIcon}
              alt='expressIcon'
              style={{ marginRight: '30px' }}
            />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <img src={cssIcon} alt='cssIcon' style={{ marginRight: '30px' }} />
            <img
              src={handlebarIcon}
              alt='handlebarIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={htmlIcon}
              alt='htmlIcon'
              style={{ marginRight: '30px' }}
            />
            <img
              src={mongoIcon}
              alt='mongoIcon'
              style={{ marginRight: '30px' }}
            />
          </div>
        </Col>
        <Col>
          <h1 style={{ marginBottom: '30px' }}>Education</h1>
          <div>
            <h3>Full Stack Web Development</h3>
            <p>Vanderbilt, 2023</p>
          </div>
          <div>
            <h3>European Languages and Cultures</h3>
            <p>University of Groningen, 2017</p>
          </div>
          <a
            href={resume}
            target='_blank'
            rel='noreferrer'
            className='btn'
            style={{ width: 'auto', color: '#0FF0FC' }}
          >
            Click here to view my full resume!
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
