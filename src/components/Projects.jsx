import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

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
    // <Container>
    <Carousel
      fade
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: '60%', margin: 'auto' }}
      className='shadow-lg rounded-5'
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item interval={3000}>
            <Link to={`//${slide.deployed}`}>
              <img
                style={{ height: 'auto' }}
                className='d-block w-100 rounded-5'
                src={slide.image}
                alt='project screenshot'
              />
            </Link>
            {/* <Carousel.Caption
                className='carouselCaption'
                style={{
                  bottom: '2rem',
                  margin: '0 2rem',
                  color: 'purple',
                }}
              >
                <h1>{slide.caption}</h1>
                <h2>{slide.description}</h2>
                <h2>{slide.technology}</h2>
                <h2>{slide.github}</h2>
                <h2>{slide.deployed}</h2>
              </Carousel.Caption> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
    // </Container>
  );
}

export default Projects;
