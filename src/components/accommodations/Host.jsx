function Host({ hostName, hostPic }) {
  return (
    <div className="host-info">
      <p>{hostName}</p>
      <img src={hostPic} alt="host" />
    </div>
  );
}

export default Host;
