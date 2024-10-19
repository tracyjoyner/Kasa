import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ coverImage, title }) {
  return (
    <Link className="PropertyCardContainer">
      <img className="PropertyImage" src={coverImage} alt={title} />
      <p>{title}</p>
    </Link>
  );
}

export default PropertyCard;
