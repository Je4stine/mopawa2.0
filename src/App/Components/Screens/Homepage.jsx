import React,{ useState} from "react";

import ControlledCarousel from "../Carousel";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import NavWhite from '../NavWhite'

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
            <Footer/>
        </div>
    )
}

export default Homepage;