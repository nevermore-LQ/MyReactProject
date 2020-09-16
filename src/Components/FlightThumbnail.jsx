import React from "react";
import { Link } from "react-router-dom";

const FlightThumbnail = ({ name, img }) => {
  return (
    <Link to={`/flights/${name}`} className="thumbnail">
      <img src={img} alt="" className="thumbnail-img" />
      <p className="thumbnail-text">{name}</p>
    </Link>
  );
};

export default FlightThumbnail;
