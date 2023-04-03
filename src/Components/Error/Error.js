import React from "react";
import './Error.css'

const Error = ({message}) => {
  return (
    <div className="error-container">
      <p>We want you looking fly, but...</p>
      <img className="error-image" src="https://www.matchclothing.co.uk/user/baby-big-clothes-6.jpg"/>
      <p>{message}</p>
    </div>
  )
}

export default Error