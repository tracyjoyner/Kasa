import React from "react";
import { Navigate, useParams } from "react-router-dom";
import AccommodationInfo from "../../assets/accommodation.json";
import Carousel from "../../components/accommodations/Carousel";
import TitleLocation from "../../components/accommodations/TitleLocation";
import Tags from "../../components/accommodations/Tags";
import Ratings from "../../components/accommodations/Ratings";
import Host from "../../components/accommodations/Host";
import Collapse from "../../components/collapse/Collapse";

function AccommodationDetails() {
  const id = useParams();
  const rental = AccommodationInfo.find(
    (accommodation) => accommodation.id === id.id
  );

  const equipments = rental?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <div>
      {rental ? (
        <div className="accommodation-container">
          <Carousel pictures={rental.pictures} />
          <div className="details-container">
            <TitleLocation title={rental.title} location={rental.location} />
            <Tags tags={rental.tags} />
            <Ratings rating={rental.rating} />
            <Host hostName={rental.host.name} hostPic={rental.host.picture} />
          </div>
          <div className="collapses">
            <Collapse title="Description" content={rental.description} />
            <Collapse title="Amenities" content={equipments} />
          </div>
        </div>
      ) : (
        <Navigate to="/error" />
      )}
    </div>
  );
}

export default AccommodationDetails;
