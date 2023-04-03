import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({id, name, imageLink, altImage, ageGroup, price, status}) => {

  if (status) {
    return (
      <Link to={`/details/${id}`} className='link'>
      <div className="card">
        <img src={imageLink} alt={altImage}/>
        <div className="text">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
          <p className="age">Size: {ageGroup}</p>
          <p className="status">Status: {status}</p>
        </div>
      </div>
    </Link>
    )
  } else {
    return( 
      <Link to={`/details/${id}`} className='link'>
        <div className="card">
          <img src={imageLink} alt={altImage}/>
          <div className="text">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="age">Size: {ageGroup}</p>
          </div>
        </div>
      </Link>
      )
  }

}
export default Card; 

