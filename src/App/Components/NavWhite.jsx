import React from 'react';

import Logo from '../Assets/log.png';

import {HiMenu} from 'react-icons/hi';

const NavWhite =()=>{

    return (
        <div className=' w-full bg-green-800 p-2 flex justify-between items-center flex-1 py-2 sticky top-0 z-[1]  '>
           <div className=' flex'>
                <img src={Logo} alt="Logo" style={{width:90,}}/>
                <h2 className=' text-white px-5 max-[768px]:hidden'>Mopawa</h2>
           </div>
            
           <div className='flex justify-end flex-1 items-center flex-row '>
            <ul className=' flex text-white justify-around w-[30%] items-center list-none  '>
                    <li >
                       <a href='#' className=' no-underline text-white font-bold hover:bg-orange-400 p-2 rounded-md hover:transition-all max-[768px]:hidden '>Home</a> 
                    </li>
                    <li>
                        <a href='#' className=' no-underline font-bold text-white hover:bg-orange-400 p-2 rounded-md max-[768px]:hidden'>Products</a> 
                    </li>
                    <li>
                         <a href='#' className=' no-underline font-bold  text-white hover:bg-orange-400 p-2 rounded-md max-[768px]:hidden'>FAQs</a> 
                    </li>
                    <li>
                        <a href='#' className=' no-underline font-bold text-white hover:bg-orange-400 p-2 rounded-md max-[768px]:hidden'>About</a>
                    </li>
                    <li className=' min-[768px]:hidden'>
                        <HiMenu/>
                    </li>
                </ul>
           </div>
        </div>
    )
};

export default NavWhite;