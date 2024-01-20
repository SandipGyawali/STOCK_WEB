import "./HomePage.css";
import { Link } from "react-router-dom";

function RegisterReq() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2>
          Exclusive Perks for Verified Users:{" "}
          <span className="golden-text">Elevate Your Experience</span> with Our
          Special Offers!
        </h2>
      </div>
      <div className="register-btn-wrapper">
        <Link className="register-btn" to="/auth/signup">
          Register
        </Link>
      </div>
    </div>
  );
}

export default RegisterReq;
