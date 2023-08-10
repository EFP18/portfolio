import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './images/codetrove.png';

function IndividualIntervalsExample() {
  const data = [
    {
      image: require('./images/codetrove.png'),
      caption: 'Code Trove',
      description: 'A place to save and share code snippets',
      technology: 'Handlebars',
      github: 'link',
      deployed: 'deployed',
    },
    {
      image: require('./images/marveldex.png'),
      caption: 'MarvelDex',
      description: 'A Pokedex for Marvel Characters',
      technology: 'JavaScript',
      github: 'link',
      deployed: 'deployed',
    },
    {
      image: require('./images/appointme.png'),
      caption: 'Caption',
      description: 'appointMe',
      technology: 'React, MERN, GraphQL',
      github: 'link',
      deployed: 'deployed',
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: '50%', margin: 'auto' }}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide.image}
              alt='project landing page screenshot'
            />
            <Carousel.Caption>
              <h1>{slide.caption}</h1>
              <h2>{slide.description}</h2>
              <h2>{slide.technology}</h2>
              <h2>{slide.github}</h2>
              <h2>{slide.deployed}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
