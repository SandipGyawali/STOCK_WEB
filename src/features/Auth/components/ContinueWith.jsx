/* eslint-disable react/prop-types */
import "./auth.css";

function ContinueWithBtn(props) {
  return (
    <div>
      <button
        className={`submit-btn ${
          props.data == "Next" ? "submit-next-btn" : "google-btn"
        }`}
        onClick={props.submit}
      >
        {props.img != undefined ? (
          <img src={props.img} className="google-icon" />
        ) : (
          ""
        )}{" "}
        {props.data}
      </button>
    </div>
  );
}

export default ContinueWithBtn;
