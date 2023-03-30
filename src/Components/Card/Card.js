import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({id, name, imageLink, altImage, price}) => {
  return( 
  <Link to={`/details/${id}`}>
    <p>{name}</p>
    <img src={imageLink} alt={altImage}/>
    <p>{price}</p>
  </Link>
  )
}
export default Card; 

