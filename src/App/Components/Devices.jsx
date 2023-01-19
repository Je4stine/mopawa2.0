import { Parallax } from 'react-parallax';

import layer7 from '../Assets/nebular.jpg'

const Devices =()=>{
    return (
        <div className=' h-10'>
          <Parallax bgImage={layer7} bgImageAlt="the cat" strength={800}>
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
            Content goes here. Parallax height grows with content height.
        </Parallax>
        </div>
      )
}

export default Devices;