import HomePageHeadImg from "../../assets/images/homePageHead.avif";
import "./HomePage.css";

function Head() {
  return (
    <div className="head-comp">
      {/* text wrapper */}
      <div className="quote-wrapper glitch-wrapper">
        <div className="glitch-wrapper">
          <div
            className="glitch"
            data-glitch="Empower Your Trades, Elevate Your Wealth"
          >
            Empower Your Trades, Elevate Your Wealth
          </div>
        </div>
      </div>
      {/* image wrapper */}
      <div className="head-img-wrapper">
        <img src={HomePageHeadImg} alt="head-img" className="head-img" />
      </div>
    </div>
  );
}

export default Head;
