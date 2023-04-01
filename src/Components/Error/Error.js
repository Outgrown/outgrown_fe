import React from "react";
import './Error.css'

const Error = (message) => {
  return (
    <div className="error-container">
      <img src=""/>
      <p>{message}</p>
    </div>
  )
}

export default Error