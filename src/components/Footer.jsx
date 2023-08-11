import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../components/images/github-mark.png';
import linkedinLogo from '../components/images/LI-In-Bug.png';
import instagramLogo from '../components/images/logo-ig-png-32464.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faInstagram,
//   faWhatsapp,
//   faTwitter,
// } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px',
      }}
    >
      <ul style={{ listStyleType: 'none' }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          {/* using logo images for the footer with link to the respective pages */}
          <Link to='https://github.com/EFP18'>
            <img
              src={githubLogo}
              alt='github logo'
              style={{ height: '40px' }}
            />
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to='https://www.linkedin.com/in/ester-pelosof-242603228/'>
            <img
              src={linkedinLogo}
              alt='linkedin logo'
              style={{ height: '40px' }}
            />
          </Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to='https://www.instagram.com/ester_pelosof/'>
            <img
              src={instagramLogo}
              alt='instagram logo'
              style={{ height: '40px' }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
