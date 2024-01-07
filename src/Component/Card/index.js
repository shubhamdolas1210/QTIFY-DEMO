import "./card.css";
import Tooltip from "@mui/material/Tooltip";

// const songsData = data.map((item) => item.songs.length);

export default ({ imgSrc, followerCount, label }) => {
  return (
    <div className="card-wrapper">
      <Tooltip title={`${42} songs`} placement="top" arrow>
        <div className="card">
          <div className="card-img-frame">
            <img className="card-img" src={imgSrc} alt="img not showing" />
            <div className="card-content">
              <span className="card-content-pill">{followerCount} follows</span>
            </div>
          </div>
        </div>
      </Tooltip>
      <p className="card-label">{label}</p>
    </div>
  );
};
