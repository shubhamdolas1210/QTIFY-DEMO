import Searchbar from "../Navbar/Searchbar";
import Button from "../Navbar/Button";
import "./navbar.css";
import "./Button/button.css";

export default () => {
  return (
    <div className="navbar">
      <img src="Group 1.png" width={67} height={34} />
      <Searchbar />
      <button className="button">Give Feedback</button>
    </div>
  );
};
