import { useState } from "react";
import arrow from "../../assets/Carousel-Arrow.svg";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const nextPicture = () =>
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  const previousPicture = () =>
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      {pictures.length === 1 ? (
        <img className="soloPicture" src={pictures[0]} alt="" />
      ) : (
        <>
          {pictures.map((picture, index) => (
            <img
              key={index}
              className={"picture" + (index === current ? " active" : "")}
              src={picture}
              alt=""
            />
          ))}
          <span className="caption">
            {current + 1}/{pictures.length}
          </span>
          <div className="arrow-previous" onClick={previousPicture}>
            <img src={arrow} className="previous-arrow" alt="previouse arrow" />
          </div>
          <div className="arrow-next" onClick={nextPicture}>
            <img src={arrow} className="next-arrow" alt="next arrow" />
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
