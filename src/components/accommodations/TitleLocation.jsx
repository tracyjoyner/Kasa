function TitleLocation({ title, location }) {
  return (
    <div className="title-loc-host-container">
      <div className="title-location">
        <h1 className="title">{title}</h1>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

export default TitleLocation;
