import React,{ useState} from "react";

import Footer from "../Footer";

import Navbar from "../Navbar";

import NavWhite from "../NavWhite";

import './Contacts.css';

import {AiOutlineArrowDown} from 'react-icons/ai';
import GetInTouch from "../GetinTouch";

const Contacts =()=>{
    const [colorChanged, setColorChanged]= useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorChanged(true);
        }
        else{
          setColorChanged(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <div>
           {
                colorChanged ? <NavWhite/> : <Navbar/>
            } 
            <div className="parallaxerror">
                    <span className=" absolute top-[50%] left-[35%] md:left-[45%]">
                            <h1 className=" text-white font-bold">Contact Us </h1>
                    </span>
                    <a className=" absolute bottom-10 left-[50%] animate-bounce" href="#1">
                            <AiOutlineArrowDown size={50} color="white"/>
                    </a> 
            </div>
            <div className=" flex flex-col items-center ">
                <h1 className=" mt-10">Get In Touch With Us</h1>
                <GetInTouch/>
            </div>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts;