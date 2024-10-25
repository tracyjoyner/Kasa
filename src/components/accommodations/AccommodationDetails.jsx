import React from "react";
import accommodation from "../../assets/accommodation.json";
import Carousel from "./Carousel.jsx";
import TitleLocationHost from "./TitleLocationHost.jsx";
import Tags from "./Tags.jsx";
import Ratings from "./Ratings.jsx";
import Dropdowns from "./Dropdowns.jsx";

function AccommodationDetails() {
  return (
    <div>
      {accommodation.map((rental) => (
        <div key={rental.id}>
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
      ))}
      ;
    </div>
  );
}

export default AccommodationDetails;
