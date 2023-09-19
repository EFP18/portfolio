import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareGithub,
  faSquareInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px',
        marginBottom: '20px',
      }}
    >
      <ul style={{ listStyleType: 'none' }} className='ulFooter'>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          {/* using logo images for the footer with link to the respective pages */}
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:e.pelosof18@gmail.com'
          >
            <FontAwesomeIcon
              className='indIcons mailIcon'
              style={{ height: '50px' }}
              icon={faEnvelope}
            />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          {/* using logo images for the footer with link to the respective pages */}
          <Link to='https://github.com/EFP18'>
            <FontAwesomeIcon
              className='indIcons githubIcon'
              style={{ height: '50px' }}
              icon={faSquareGithub}
            />
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to='https://www.linkedin.com/in/ester-pelosof-242603228/'>
            <FontAwesomeIcon
              className='indIcons linkedinIcon'
              icon={faLinkedin}
              style={{ height: '50px' }}
            />
          </Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to='https://www.instagram.com/ester_pelosof/'>
            <FontAwesomeIcon
              className='indIcons instagramIcon'
              icon={faSquareInstagram}
              style={{ height: '50px' }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
