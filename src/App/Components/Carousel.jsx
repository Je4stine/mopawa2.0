import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Woman from '../Assets/slider1.jpg';

import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=' z-[2] realative'>
    <div  className='carouselWrapper'>
    <div className=' absolute'>
      <h1>Mopawa</h1>
    </div>
    <Carousel 
      activeIndex={index} onSelect={handleSelect}
      autoPlay={true}
      interval={2000}
      indicators={false}
      controls={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 height:100px"
          src={Woman}
          alt="First slide"
          style={{ maxHeight:800  }}
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Woman}
          alt="Second slide"
          style={{ maxHeight:800}}
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Woman}
          alt="Third slide"
          style={{ maxHeight:800}}
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}



export default ControlledCarousel
