/* eslint-disable react/prop-types */
import "./auth.css";

function Input(props) {
  return (
    <div className="input-field">
      <label>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</label>
      <br />
      <input
        type={props.type}
        onChange={(e) => props.setData(e.target.value)}
        value={props.value}
      />
    </div>
  );
}

export default Input;
