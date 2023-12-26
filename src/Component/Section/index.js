import "./Section.css";
import Card from "../Card/index.js";
export default ({ title, data }) => {
  return (
    <div className="Section">
      <h1 className="title">{title}</h1>
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
    </div>
  );
};
