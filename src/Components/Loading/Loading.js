import React from "react";
import spinner from '../../assets/OutGrownSpinner'
import logo from '../../assets/OutGrownLogo'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <img className='spinner' src={spinner} alt='Circle of Pokemon spinning in a circle'/>
      <img className='title' src={logo} alt='Pokependium title image'/>
    </div>
  )
}

export default Loading