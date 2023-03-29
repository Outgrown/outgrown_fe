import React from "react";
import { Link } from "react-router-dom";

export default function Panel({path, label}) {
  return (
    <swiper-slide>
      <Link className="art-link" to={`/${path}`}>{`${label}`}</Link>
    </swiper-slide>
  )
}