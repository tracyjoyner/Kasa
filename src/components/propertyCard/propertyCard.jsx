import React from "react";
import { Link } from "react-router-dom";
import "./propertyCard.scss";

function PropertyCard({ cover, title }) {
  return (
    <Link className="PropertyCardContainer">
      <img className="PropertyImage" src={cover} alt={title} />
      <p>{title}</p>
    </Link>
  );
}

export default PropertyCard;
