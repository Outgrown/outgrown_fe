import React from "react";
import { Link } from "react-router-dom";

export default function Panel({img, path, label}) {
  return (
    <swiper-slide>
      <Link className="art-link" to={`/marketplace/${path}`}>
        <img src={img} alt={label} />
        {`${label}`}
      </Link>
    </swiper-slide>
  )
}