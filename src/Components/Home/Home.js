import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Panel from "./Panel";
import "./Home.css"
import {register} from 'swiper/element/bundle'
register()
// import Nav from "../Nav/Nav"

export default function Home() {
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      breakpoints: {
        1000: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 1,
        }
      }
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }, [])
  
  return (
    <>
      <h1 className="header">Outgrown</h1>
      <div>Nav Goes Here</div>
      <div className="cta">
        <h2>Shop stuff and see some clothes</h2>
        <p>(Image goes here)</p>
      </div>
      <div className="cat-container">
        <h3 className="home-label">Style for every stage</h3>
        <div className="cat-box">
          <Link className="cat-link" to="/marketplace/baby">
            <img className="cat-img" src="https://images.theconversation.com/files/301782/original/file-20191114-26273-4r0nva.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="Crying baby" />
            Baby (0 - 2)
          </Link>
          <Link className="cat-link" to="/marketplace/toddler">
            <img className="cat-img" src="https://s.wsj.net/public/resources/images/BN-NU761_yhealt_8S_20160502103050.jpg" alt="Crying toddler" />
            Toddler (2 - 4)
          </Link>
          <Link className="cat-link" to="/marketplace/smallkid">
            <img className="cat-img" src="https://media.istockphoto.com/id/153664652/photo/children-kid-screaming-expression-on-white.jpg?s=612x612&w=0&k=20&c=-HMOjkQF8RbwsvJuAln_gFpcfnCUKFcolhj3uo-KquY=" alt="Screaming small kid" />
            Small Kid (5 - 7)
          </Link>
          <Link className="cat-link" to="/marketplace/bigkid">
            <img className="cat-img" src="https://media.istockphoto.com/id/471200718/photo/unhappy-boy-crying.jpg?s=612x612&w=0&k=20&c=5YkxNLOwWMLs1J2FTQKneaca4Yi6mm9qUr3sTbc-GG4=" alt="Angry big kid" />
            Big Kid (8+)
          </Link>
        </div>
      </div>
      <div className="article-container">
        <h3 className="home-label">Browse by article type</h3>
        <swiper-container
          init="false"
          grab-cursor="true"
          navigation="true"
          loop="true"
        >
          <Panel path="" label="Tops/Tees" /> 
          <Panel path="" label="Pants" />
          <Panel path="" label="Activewear" />  
          <Panel path="" label="Formal" />  
          <Panel path="" label="Onesies" />   
          <Panel path="" label="Other" />  
        </swiper-container>
      </div>
    </>
  )
}
