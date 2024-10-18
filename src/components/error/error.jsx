import "./error.scss";

function Error() {
  return (
    <div className="ErrorContainer">
      <div className="ErrorTitle">404</div>
      <div className="ErrorSubtitle">
        Oops! The page you’re looking for doesn’t exist.
      </div>
      <div className="ErrorReturn">Return to home page</div>
    </div>
  );
}

export default Error;
