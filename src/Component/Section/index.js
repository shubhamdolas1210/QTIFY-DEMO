import "./Section.css";
import Card from "../Card/index.js";
import { useState } from "react";
import Carousel from "../Carousel/index.js";

export default ({ title, data }) => {
  const [isCollapsed, setisCollapsed] = useState();
  return (
    <div className="Section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        <h1
          className="section-toggler-btn"
          onClick={() => {
            setisCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collpase"}
        </h1>
      </div>
      {isCollapsed ? (
        <Carousel data={data} />
      ) : (
        <div className="card-container">
          {data.map((cardData) => (
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              label={cardData.title}
              followerCount={cardData.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};
