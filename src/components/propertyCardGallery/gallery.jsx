import React from "react";
import { Link } from "react-router-dom";
import accommodation from "../../assets/accommodation.json";
import PropertyCard from "../propertyCard/PropertyCard";

function Gallery() {
  return (
    <div className="gallery-container">
      <ul className="accommodations">
        {accommodation.map((rental) => {
          return (
            <li key={rental.id}>
              <Link to={`/accommodations/${rental.id}`}>
                <PropertyCard coverImage={rental.cover} title={rental.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallery;
