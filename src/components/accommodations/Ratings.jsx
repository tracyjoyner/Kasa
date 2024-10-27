import starRed from "../../assets/star-red.svg";
import starGrey from "../../assets/star-grey.svg";

function Ratings({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratings-container">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="star"
            src={starRed}
            alt=" redstar"
          />
        ) : (
          <img
            key={star.toString()}
            className="star"
            src={starGrey}
            alt="grey star"
          />
        )
      )}
    </div>
  );
}

export default Ratings;
