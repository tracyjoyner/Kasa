import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <div className="error-title">404</div>
      <div className="error-subtitle">
        Oops! The page you’re looking for doesn’t exist.
      </div>
      <Link to="/" className="error-return">
        Return to home page
      </Link>
    </div>
  );
}

export default Error;
