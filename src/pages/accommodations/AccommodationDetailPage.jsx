import React from "react";
import { Navigate, useParams } from "react-router-dom";
import AccommodationInfo from "../../assets/accommodation.json";
import Carousel from "../../components/accommodations/Carousel";
import TitleLocationHost from "../../components/accommodations/TitleLocationHost";
import Tags from "../../components/accommodations/Tags";
import Ratings from "../../components/accommodations/Ratings";
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
          <Carousel />
          <TitleLocationHost
            title={rental.title}
            location={rental.location}
            hostName={rental.host.name}
            hostPic={rental.host.picture}
          />
          <Tags tags={rental.tags} />
          {/* TODO figure out stars */}
          <Ratings />
          <Collapse title="Description" content={rental.description} />
          <Collapse title="Amenities" content={equipments} />
        </div>
      ) : (
        <Navigate to="/error" />
      )}
    </div>
  );
}

export default AccommodationDetails;
