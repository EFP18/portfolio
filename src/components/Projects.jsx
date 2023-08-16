import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/Projects.css';

function Projects() {
  const data = [
    {
      image: require('./images/codetrove.png'),
      caption: 'Code Trove',
      description: 'A place to save and share code snippets',
      technology: 'Handlebars',
      github: '',
      deployed: 'code-trove.herokuapp.com/',
    },
    {
      image: require('./images/marveldex.png'),
      caption: 'MarvelDex',
      description: 'A Pokedex for Marvel Characters',
      technology: 'JavaScript',
      github: 'link',
      deployed: 'dylanstormjohnson.github.io/marvel-dex/',
    },
    {
      image: require('./images/appointme.png'),
      caption: 'Caption',
      description: 'appointMe',
      technology: 'React, MERN, GraphQL',
      github: 'link',
      deployed: 'appointme-deploy-73ae09842608.herokuapp.com/',
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <h1
        id='projects'
        className='projectsTitle'
        style={{ marginLeft: '30px', marginBottom: '30px' }}
      >
        Projects
      </h1>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: '100%', margin: 'auto' }}
        className='shadow-lg rounded-5'
      >
        {data.map((slide, i) => {
          return (
            <Carousel.Item key={slide.image} interval={3000}>
              <Link to={`//${slide.deployed}`}>
                <img
                  style={{ height: 'auto' }}
                  className='d-block w-100 rounded-5'
                  src={slide.image}
                  alt='project screenshot'
                />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Projects;
