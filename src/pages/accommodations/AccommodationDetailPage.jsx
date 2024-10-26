import React from "react";
import { Navigate, useParams } from "react-router-dom";
import AccommodationInfo from "../../assets/accommodation.json";
import Carousel from "../../components/accommodations/Carousel";
import TitleLocationHost from "../../components/accommodations/TitleLocationHost";
import Tags from "../../components/accommodations/Tags";
import Ratings from "../../components/accommodations/Ratings";
import Dropdowns from "../../components/accommodations/Dropdowns";

function AccommodationDetails() {
  const id = useParams();
  const rental = AccommodationInfo.find(
    (accommodation) => accommodation.id === id.id
  );

  return (
    <div>
      {rental ? (
        <div>
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
          <Dropdowns
            description={rental.description}
            equipments={rental.equipments}
          />
        </div>
      ) : (
        <Navigate to="/error" />
      )}
    </div>
  );
}

export default AccommodationDetails;
