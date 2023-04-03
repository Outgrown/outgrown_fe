import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = ({ id, name, imageLink, altImage, ageGroup, price }) => {
  const displayAge = ageGroup
    .split("_")
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(" ");
    
  return (
    <Link to={`/details/${id}`} className="link">
      <div className="card">
        <img src={imageLink} alt={altImage} />
        <div className="text">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
          <p className="age">Size: {displayAge}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
