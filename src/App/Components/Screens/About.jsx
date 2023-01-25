import React,{ useState} from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NavWhite from "../NavWhite";
import './About.css';
import {AiOutlineArrowDown} from 'react-icons/ai';
import { LazyLoadComponent } from 'react-lazy-load-image-component';


const About =()=>{

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
    
    return (
        <div>
           {
            colorChanged ? <NavWhite/> : <Navbar/>
           }
           <LazyLoadComponent>
                    <div className=" parallaxerr1">
                            <span className=" absolute top-[50%] left-[45%]">
                                <h1 className=" text-white font-bold">About Us</h1>
                            </span>
                            <a className=" absolute bottom-10 left-[50%] animate-bounce" href="#1">
                                    <AiOutlineArrowDown size={50} color="white"/>
                            </a> 

                    </div>
           </LazyLoadComponent>
           
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
            <Footer/>
        </div>
    )
};

export default About;