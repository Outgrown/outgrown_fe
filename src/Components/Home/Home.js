import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Panel from "./Panel";
import "./Home.css"
import babyImg from "../../assets/baby.jpeg"
import toddlerImg from '../../assets/toddler.webp'
import littleKidImg from "../../assets/little_kid.avif"
import bigKidImg from "../../assets/big_kid.webp"
import topsImg from "../../assets/tops.png"
import activeImg from "../../assets/activewear.jpg"
import formalImg from "../../assets/formal.jpeg"
import bottomsImg from "../../assets/bottoms.jpg"
import onesiesImg from "../../assets/onesies.jpeg"
import otherImg from "../../assets/other.png"
import {register} from 'swiper/element/bundle'
register()

export default function Home() {
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      breakpoints: {
        1000: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        }
      }
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }, [])
  
  return (
    <>
      <div className="cta-box">
        <div className="cta cta-visible">
          <h2>Gently used clothes for all ages and sizes</h2>
          <Link to="/marketplace">{"Shop all clothes >"}</Link>
        </div>
      </div>
      <div className="cta cta-hidden">
        <h2>Gently used clothes for all ages and sizes</h2>
        <Link to="/marketplace">{"Shop all clothes >"}</Link>
      </div>
      <div className="cat-container">
        <h3 className="home-label">Style for every stage</h3>
        <div className="cat-box">
          <Link data-cy="baby-cat" className="cat-link" to="/marketplace/all/baby/all">
            <img className="cat-img" src={babyImg} alt="A baby wearing a green sweater and overalls" />
            Baby (0 - 2)
          </Link>
          <Link data-cy="toddler-cat" className="cat-link" to="/marketplace/all/toddler/all">
            <img className="cat-img" src={toddlerImg} alt="A toddler wearing jeans and a white t-shirt" />
            Toddler (2 - 4)
          </Link>
          <Link data-cy="littlekid-cat" className="cat-link" to="/marketplace/all/little_kid/all">
            <img className="cat-img" src={littleKidImg} alt="A little kid wearing a striped longsleeve shirt" />
            Little Kid (5 - 7)
          </Link>
          <Link data-cy="bigkid-cat" className="cat-link" to="/marketplace/all/big_kid/all">
            <img className="cat-img" src={bigKidImg} alt="A big kid wearing a red plaid shirt and a yellow hat" />
            Big Kid (8+)
          </Link>
        </div>
      </div>
      <div className="art-container">
        <h3 className="home-label">Browse by article type</h3>
        <swiper-container
          init="false"
          grab-cursor="true"
          navigation="true"
          loop="true"
        >
          <Panel img={topsImg} path="tops/all/all" label="Tops/Tees" /> 
          <Panel img={bottomsImg} path="pants/all/all" label="Bottoms" />
          <Panel img={activeImg} path="activewear/all/all" label="Activewear" />  
          <Panel img={formalImg} path="formal/all/all" label="Formal" />  
          <Panel img={onesiesImg} path="onesies/all/all" label="Onesies" />   
          <Panel img={otherImg} path="other/all/all" label="Other" />  
        </swiper-container>
      </div>
    </>
  )
}
