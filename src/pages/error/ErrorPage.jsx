import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="ErrorContainer">
      <div className="ErrorTitle">404</div>
      <div className="ErrorSubtitle">
        Oops! The page you’re looking for doesn’t exist.
      </div>
      <Link to="/" className="ErrorReturn">
        Return to home page
      </Link>
    </div>
  );
}

export default Error;
