import "./card.css";

export default ({ imgSrc, followerCount, label }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} alt="img not showing" />
          <div className="card-content">
            <span className="card-content-pill">{followerCount} follows</span>
          </div>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
};
