import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTiktok,
  faTwitch,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./HomePage.css";

function Community() {
  return (
    <div className="community-container">
      <div className="community-text">
        <h1>Communities</h1>
      </div>
      <div className="community-wrapper">
        <div className="community-icon">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
        </div>
        <div className="community-icon">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>
        <div className="community-icon">
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </div>
        <div className="community-icon">
          <FontAwesomeIcon icon={faTiktok} className="icon" />
        </div>
        <div className="community-icon">
          <FontAwesomeIcon icon={faTwitch} className="icon" />
        </div>
        <div className="community-icon">
          <FontAwesomeIcon icon={faYoutube} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Community;
