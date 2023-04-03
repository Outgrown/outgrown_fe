import React from "react";
import './Error.css'

const Error = (message) => {
  return (
    <div className="error-container">
      <img src="https://www.matchclothing.co.uk/user/baby-big-clothes-6.jpg"/>
      <p>{message}</p>
    </div>
  )
}

export default Error