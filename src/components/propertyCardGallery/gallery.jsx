import React from "react";
import { Link } from "react-router-dom";
import accommodation from "../../assets/accommodation.json";
import PropertyCard from "../propertyCard/PropertyCard";

function Gallery() {
  return (
    <div className="GalleryContainer">
      <ul className="accommodations">
        {accommodation.map((rental) => (
          <li key={rental.id}>
            <Link to={`/accommodation/${rental.id}`}>
              <PropertyCard coverImage={rental.cover} title={rental.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
