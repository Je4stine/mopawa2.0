import React,{ useState} from "react";

import Footer from "../Footer";

import Navbar from "../Navbar";

import NavWhite from "../NavWhite";

import Station from '../../Assets/Station-1.png' ;

import {AiOutlineArrowDown} from 'react-icons/ai';

import './Product.css';

import {  LazyLoadComponent } from "react-lazy-load-image-component";




const Product =()=>{

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
                <div className="parallaxerr">
                    <span className=" absolute top-[50%] left-[45%]">
                            <h1 className=" text-white font-bold">Our Products</h1>
                    </span>
                    <a className=" absolute bottom-10 left-[50%] animate-bounce" href="#1">
                            <AiOutlineArrowDown size={50} color="white"/>
                    </a> 
                </div>
           </LazyLoadComponent>
           
            <div className=" flex flex-1 max-[786px]:flex-col" id="#1">
                <img src={Station} className=" w-[800px] max-[768px]:w-[500px] " alt="Forty 40"/>
                <div className="p-[100px] max-[768px]:p-3" >
                    <h1>
                        Power Bank Station
                    </h1>
                    <p>
                    Applicable to: catering, bar, hotel, guide desk, and other small and medium-sized scenes.
                    Usually, one to two sets are placed in one scene.
                     The display can be LCD screen or lightbox for advertising.<br/>
                        <ul className=" list-disc">
                            <li>
                                4G Stable signal
                            </li>
                            <li>
                                Imported ST Micro chi
                            </li>
                            <li>
                                1280*800 high-definition
                            </li>
                            <li>10.1 inch screen</li>
                            <li>178° wide viewing angle</li>
                            <li>A-grade screen with imported chip</li>
                            <li> Intelligent voice service prompts</li>
                            <li>Safe and stable hard material</li>
                            <li>PCB antennas</li>
                            <li>VO grade fire-proof</li>
                            <li> ABS + PC material</li>
                            <li> Anti-theft clip with patented deceleration motor</li>
                            <li>4G Stable signal / Imported Microchip</li>
                            <li>1280*800 high-definit10.1-inchinch screen</li>
                            <li>178° wide viewing angle</li>
                            <li>A-grade screen with imported chip</li>
                            <li>Intelligent voice service prompts</li>
                            <li>Safe and stable hard material PCB antennas</li>
                            <li> VO grade fire-proof ABS + PC material</li>
                            <li>Anti-theft clip with patented deceleration motor</li>
                        </ul>                   
                    </p>
                </div>
                
            </div>

            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Product