function TitleLocationHost({title, location, hostName, hostPic}) {
  return (
    <div className="title-loc-host-container">
      <div className="title-location">
        <h1 className="title">{title}</h1>
        <h2 className="location">{location}</h2>
      </div>
      <div className="host-info">
        <p>{hostName}</p>
        <img src={hostPic} alt="host" />
      </div>
    </div>
  );
}

export default TitleLocationHost;
