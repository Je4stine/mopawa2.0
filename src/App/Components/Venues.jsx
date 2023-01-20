import Hospital from '../Assets/KNH.jpg';

import Club from '../Assets/fortyforty.jpg';

import Naifest from '../Assets/naifest.jpg';

import Mall from '../Assets/2rivers.jpg';

const Venues =()=>{
    return (
        <div className=' flex flex-col align-center justify-center '>
            <div className=' mt-5'></div>
            <h1 className=' m-auto max-[768px]:text-center'>
                 Highly Used Venues for Power Bank Rental Stations
            </h1>
            <div className=' flex mt-5 max-[768px]:flex-col relative'>
                    <div className=' flex flex-col flex-1 relative group'>
                        <img src={Hospital} alt="Venues" className=' w-[500px] h-full hover:opacity-25 max-[768px]:w-full object-cover'/>
                        <div className=' absolute left-[45%] top-[45%] font-bold hover:opacity-100 z-1'>Hospitals</div>
                    </div>
                    <div className=' flex flex-col flex-1 relative'>
                        <img src={Club} alt="Venues" className=' w-[500px] h-full hover:opacity-25 max-[768px]:w-full object-cover'/>
                        <div className=' absolute left-[45%] top-[45%] font-bold hover:opacity-100 z-1'>Clubs</div>
                    </div>
                    <div className=' flex flex-col flex-1 relative'>
                        <img src={Naifest} alt="Venues" className=' w-[500px] h-full hover:opacity-25 max-[768px]:w-full object-cover'/>
                        <div className=' absolute left-[45%] top-[45%] font-bold hover:opacity-100 z-1'>Events</div>
                    </div>
                    <div className=' flex flex-col flex-1 relative'>
                        <img src={Mall} alt="Venues" className=' w-[500px] hover:opacity-25 max-[768px]:w-full object-cover'/>
                        <div className=' absolute left-[45%] top-[45%] font-bold hover:opacity-100 z-1'>Malls</div>
                    </div>
            </div>            
        </div>
    )
}

export default Venues