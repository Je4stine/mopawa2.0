import { Parallax } from 'react-parallax';

import layer7 from '../Assets/phoneus.jpg';

import Powerbank from '../Assets/Station-1.png';

const Devices =()=>{
    return (
        <div>
        <Parallax bgImage={layer7} bgImageAlt="the cat" strength={500}>
          <div className=' h-[400px] w-full bg-green-800 bg-opacity-70 flex items-center px-10 '>
              <div className=' flex justify-between items-center'>
                <h2 className='text-white max-[768px]:text-sm'>
                    Various Station Designs Applied In Different Scenarios.
                </h2> 
                <img src={Powerbank} alt="Powerbank" className=' w-[400px] max-[768px]:w-[200px]'/>
              </div>
          </div>   
        </Parallax>
        </div>
      )
}

export default Devices;