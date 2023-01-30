import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Woman from '../Assets/slider1.jpg';

import Image1 from '../Assets/image1.jpg';

import Image2 from '../Assets/image2.jpg';

import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=' z-[2] realative h-full mt-[50px] md:mt-0'>
  
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
          src={Image1}
          alt="Second slide"
          style={{ maxHeight:800}}
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Third slide"
          style={{ maxHeight:800}}
        />
        
      </Carousel.Item>
    </Carousel>

    </div>
  );
}



export default ControlledCarousel
