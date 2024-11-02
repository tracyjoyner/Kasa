import starRed from "../../assets/star-red.svg";
import starGrey from "../../assets/star-grey.svg";

function RatingsHost({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratings-container">
      <div className="stars">
        {stars.map((star) =>
          rating >= star ? (
            <img key={star.toString()} src={starRed} alt="red star" />
          ) : (
            <img key={star.toString()} src={starGrey} alt="grey star" />
          )
        )}
      </div>
    </div>
  );
}

export default RatingsHost;
