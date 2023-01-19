import React, { useState} from 'react';

import { Transition } from "@headlessui/react";

import {HiMenu} from 'react-icons/hi'

import Logo from '../Assets/log.png';

const Navbar =()=>{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=' w-full bg-transparent p-2 flex justify-between items-center flex-1 py-2 absolute top-0 z-[1]  '>
           <div className=' flex'>
                <img src={Logo} alt="Logo" className=' w-[90px] max-[768px]:w-[70px]' />
                <h2 className=' text-white px-5 max-[768px]:hidden '>Mopawa</h2>
           </div>
           <div className='flex justify-end flex-1 items-center flex-row '>
            <ul className=' flex text-white justify-around w-[30%] items-center list-none '>
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

export default Navbar;