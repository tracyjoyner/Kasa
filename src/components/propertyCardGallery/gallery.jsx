import React from "react";
import accommodation from "../../assets/accommodation.json";
import PropertyCard from "../propertyCard/PropertyCard";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="GalleryContainer">
      <ul className="accommodations">
        {accommodation.map((rental) => (
          <li key={rental.id} accommodation={rental} aria-hidden="true">
            <PropertyCard
              coverImage={rental.cover}
              title={rental.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
