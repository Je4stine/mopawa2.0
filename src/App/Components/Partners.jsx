import Map from '../Assets/partnermap.png';

import CountUp from 'react-countup';

const Partners =()=>{
    return (
        <div className=' flex flex-col items-center px-20 mt-10'>
            <h1 className=' max-[768px]:text-sm'>
                Trusted By 300+ Global Partners
            </h1>
            <p className=' text-center max-[768px]:text-sm'>
                The shared power bank rental station is the future of phone charging on the go. The shared power bank market is anticipated to exhibit a compound annual growth rate (CAGR) of 18.4% from 2020 to 2027. With this huge potential market, we’ve cooperated with 300+ clients around the world.
            </p>
            <img src={Map} alt="Partner Map"/>
            <div>
                <CountUp
                        start={1999}
                        end={2022}
                        duration={2.75}
                        >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                </CountUp>
            </div>
        </div>
    )
};

export default Partners