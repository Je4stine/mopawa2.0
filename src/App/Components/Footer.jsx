import logo from '../Assets/log.png';

import {FaFacebook, FaInstagramSquare} from 'react-icons/fa';

import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer =()=>{

    const Today = new Date();

    return (
        <div className=" bg-black w-full p-5  ">
            <div className=' flex flex-1 justify-between max-[768px]:flex-col'> 
                <div className=' flex flex-col flex-1 items-center'>
                    <div className=' flex item-center'>
                        <img src={logo} alt="Logo" style={{ width: 80, height: 50, margin:5}} className="max-[768px]:w-[20px]"/>
                        <h2 className=' text-white max-[768px]:hidden'>Mopawa</h2>
                    </div>
                    <p className=" text-gray-400 max-[768px]:text-sm"> 
                        Mopawa Software Limited <br/>
                        Cassamia apartments <br/>
                        Ngong' Road <br/>
                        Email: info@mopawa.co.ke <br/>
                        Phone: +254 708 999 666
                    </p>
                </div>

                <hr className=' w-[1px] h-[200px] inline-block  bg-white max-[768px]:hidden'/>

                <div className=' flex flex-col flex-1'>
                    <div className=' flex flex-col items-center'>
                        <h2 className=' text-white max-[768px]:text-sm max-[768px]:mt-5'> Quick Links</h2>
                        <a href='#' className=' no-underline text-gray-400 max-[768px]:text-sm'> Home</a>
                        <a href="#" className=' no-underline text-gray-400 max-[768px]:text-sm'>About US</a>
                        <a href='#' className=' no-underline text-gray-400 max-[768px]:text-sm'>Policies</a>
                        <a href='#' className=' no-underline text-gray-400 max-[768px]:text-sm'>Product</a>
                    </div>
                </div>

                {/* <div className=' w-[0.5px] h-[200px] bg-white flex flex-col items-center'>
                </div> */}
                <hr className=' w-[1px] h-[200px] inline-block bg-white max-[768px]:hidden'/>
                <div className=' flex flex-col flex-1 items-center'>
                    <h2 className=' text-white max-[768px]:text-sm max-[768px]:mt-5'>Socials</h2>
                    <div className='flex max-[768px]:items-center '>
                         <FaFacebook color='#fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm'>Mopawa Software limited</p>
                    </div>
                    <div className='flex items-center '>
                         <FaInstagramSquare color=' #fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm'>Mopawa Software limited</p>
                    </div>
                    <div className='flex items-center '>
                         <AiFillTwitterCircle color=' #fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm'>Mopawa Software limited</p>
                    </div>
                    
                  
                </div>
            </div>


          <div className=' m-auto flex items-center'>
                <p className=' text-gray-400 m-auto text-center mt-5 max-[768px]:text-sm'>All rights reserved  &#169; {Today.getFullYear()}- Mopawa Software Limited </p>
         </div> 

        </div>
    )
}

export default Footer;