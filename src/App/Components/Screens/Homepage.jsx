import React,{ useState} from "react";

import ControlledCarousel from "../Carousel";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import NavWhite from '../NavWhite';

import { Transition } from '@tailwindui/react'
import About from "../About";
import Devices from "../Devices";
import Partners from "../Partners";
import Howto from "../Howto";
import Venues from "../Venues";

const Homepage =()=>{
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
        <div className=" relative">
            {
                colorChanged ? <NavWhite/> : <Navbar/>
            } 
            <ControlledCarousel/>
            <About/>
            <Devices/>
            <Partners/>
            <Howto/>
            <Venues/>
            <Footer/>
        </div>
    )
}

export default Homepage;