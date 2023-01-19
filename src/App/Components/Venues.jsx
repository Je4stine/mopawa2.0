import Hospital from '../Assets/KNH.jpg';

import Club from '../Assets/fortyforty.jpg';

import Naifest from '../Assets/naifest.jpg';

import Mall from '../Assets/2rivers.jpg';

const Venues =()=>{
    return (
        <div className=' flex flex-col align-center justify-center '>
            <h1 className=' m-auto max-[768px]:text-center'>
                 Highly Used Venues for Power Bank Rental Stations
            </h1>
            <div className=' flex mt-5 max-[768px]:flex-col'>
                    <img src={Hospital} alt="Venues" className=' w-[500px] max-[768px]:w-full'/>
                    <img src={Club} alt="Venues" className=' w-[500px] max-[768px]:w-full'/>
                    <img src={Naifest} alt="Venues" className=' w-[500px] max-[768px]:w-full'/>
                    <img src={Mall} alt="Venues" className=' w-[500px] max-[768px]:w-full'/>
            </div>            
        </div>
    )
}

export default Venues