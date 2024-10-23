import React from "react";

function PropertyCard({ coverImage, title }) {
  return (
    <div className="property-card-container">
      <img className="property-image" src={coverImage} alt={title} />
      <div className="linear-gradient"></div>
      <p>{title}</p>
    </div>
  );
}

export default PropertyCard;
