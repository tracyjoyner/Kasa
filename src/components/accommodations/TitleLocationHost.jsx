function TitleLocationHost({ title, location, hostName, hostPic }) {
  return (
    <div className="title-loc-host-container">
      <div className="title-location">
        <h1 className="title">{title}</h1>
        <p className="location">{location}</p>
      </div>
      <div className="host-info">
        <p>{hostName}</p>
        <img src={hostPic} alt="host" />
      </div>
    </div>
  );
}

export default TitleLocationHost;
