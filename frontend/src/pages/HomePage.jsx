import { Link } from "react-router-dom";
import "../../styles/pages/HomePage.css";
import Background from "../../assets/bg.png";
const HomePage = () => {
  return (
    <>
      <div className="hp-outer-div">
        <div className="hp-text-div">
          <span className="hp-heading-sa">Sentiment Analysis</span>
          <br />
          <span className="hp-title">
            Understanding your audience better.
          </span>
          <br></br>
          <br></br>
          <span className="hp-nocode">No-Code Text Analytics</span>
          <div className="content">
            <Link to="/analyze">
              <button className="hp-button">Analyze New Content</button>
            </Link>
          </div>
        </div>
        <div className="hp-img-div">
          <img src={Background}></img>
        </div>
      </div>
    </>
  );
};

export default HomePage;
