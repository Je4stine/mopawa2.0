import dummy from '../Assets/codmm.png';

import dummy2 from '../Assets/mpesa.jpg';

import dummy3 from '../Assets/Capture1.jpg'

const About =()=>{
    return (
        <div className=" px-40 my-20 flex flex-col items-center max-[768px]:px-2 max-[768px]:mx-2">
            <h2>Rental Powerbank Services</h2>
            <p className=" text-center max-[768px]:text-sm"> Mopawa software limited is a top rental power bank service provider. Our services include rental power bank station, payment gateway integration, and management system development. Feel confident to contact us if you’re interested in the shared power bank rental business.</p>
            <div>
                <div className=' flex mt-2 max-[768px]:flex-col'>
                    <div className=' mx-4 flex flex-col justify-center items-center'>
                        <img src={dummy2} className=" w-[200px] max-[768px]:w-[300px]"/>
                        <h4 className=' max-[768px]:text-md'>Pay Security fee</h4>
                        <p className=' text-center max-[768px]:text-sm'>Pay a refundable Security deposit to the paybill</p>
                    </div>
                    <div className=' mx-4 flex flex-col justify-center items-center'>
                        <img src={dummy3} className=" w-[200px] max-[768px]:w-[300px]"/>
                        <h4 className=' max-[768px]:text-md'>Use the power banks</h4>
                        <p className=' text-center max-[768px]:text-sm'>Use the power bank at your own convinience</p>
                    </div>
                    <div className=' mx-4 flex flex-col justify-center items-center'>
                        <img src={dummy} className=" w-[200px] max-[768px]:w-[300px]"/>
                        <h4 className=' max-[768px]:text-md'>Return </h4>
                        <p className=' text-center max-[768px]:text-sm'>Return the powerbank to the station and get a refund</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default About;