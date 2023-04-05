import React from "react";
import './Error.css'
import BossBaby from '../../assets/babyInSuit.jpeg'

const Error = ({message}) => {
  return (
    <div className="error-container">
      <p>We want you looking fly, but...</p>
      <img className="error-image" src={BossBaby} alt="baby in too big of a suit"/>
      <p>{message}</p>
    </div>
  )
}

export default Error