import React from "react";
import spinner from '../../assets/OutGrownSpinner.png'
import logo from '../../assets/OutGrownSpinnerLogo.png'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <img className='spinner' src={spinner} alt='circle of kids clothing spinning in a circle'/>
      <img className='title' src={logo} alt='OutGrown title image'/>
    </div>
  )
}

export default Loading