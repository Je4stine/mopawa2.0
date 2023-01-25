import React, {useState} from 'react';

import Logo from '../Assets/log.png';

import {HiMenu} from 'react-icons/hi';


const NavWhite =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full bg-green-800 top-0 z-[1] min-[768px]:flex min-[768px]:justify-between max-[768px]:bg-white px-5 max-[768px]:h-[60px] sticky">
            <div className=' max-[768px]:flex max-[768px]:justify-between items-center justify-between' >
                <div className=' flex items-center justify-center'>
                    <img src={Logo} alt="Logo" className=' w-[100px] max-[768px]:w-[70px] min-[768px]:h-[50px] mt-1' />
                    <h1 className=" mx-4 my-6 font-bold text-2xl text-white max-[768px]:text-black max-[768px]:my-3"><a className=' no-underline text-white font-bold ' href='/'>Mopawa</a></h1>
                </div>
                
                <span  className=' cursor-pointer block min-[768px]:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
            </div>
            {
                isOpen ? 
                    <ul className=" min-[768px]:flex min-[768px]:items-center z-[-1] min-[768px]:z-auto min-[768px]:static absolute max-[768px]:bg-white w-full left-0 min-[768px]:w-auto min-[768px]:opacity-100 opacity-100 transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md"> 
                            <a href="/" className=" hover:text-[#f15d30] duration-500 no-underline text-black font-bold ">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/products" className=" hover:text-[#f15d30] duration-500 no-underline text-black font-bold">Products</a> 
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500 no-underline text-black font-bold">About</a> 
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/contact" className=" hover:text-[#f15d30] duration-500 no-underline text-black font-bold">Contacts</a> 
                        </li>
                    </ul> 
        :
                    <ul className=" min-[768px]:flex min-[768px]:items-center z-[-1] min-[768px]:z-auto min-[768px]:static absolute max-[768px]:bg-white w-full left-0 min-[768px]:w-auto min-[768px]:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md"> 
                            <a href="/" className=" hover:text-yellow-400 duration-500 text-white font-bold no-underline">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/products" className=" hover:text-yellow-400 duration-500 text-white font-bold no-underline">Products</a> 
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/about" className=" hover:text-yellow-400 duration-500 text-white font-bold no-underline">About</a> 
                        </li>
                        <li className=" mx-4 my-6 hover:bg-[#f15d30] px-2 rounded-md">
                            <a href="/contact" className=" hover:text-yellow-400 duration-500 text-white font-bold no-underline">Contacts</a> 
                        </li>
                    </ul>
            }
            
        </nav>
    )
};

export default NavWhite;
