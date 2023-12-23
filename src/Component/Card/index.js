import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img
            className="card-img"
            src="Rectangle 2138.png"
            alt="img not showing"
          />
          <div className="card-content">
            <span className="card-content-pill">100 follows</span>
          </div>
        </div>
      </div>
      <p className="card-label">New Bollywood</p>
    </div>
  );
};
