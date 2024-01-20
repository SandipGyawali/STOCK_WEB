import ContinueWithBtn from "./ContinueWith";
import GoogleLogo from "../../../assets/images/googleLogo.png";
import { useState } from "react";
import "./auth.css";
import Input from "./Input";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, signUp } from "../loginSignIn";

// to check the email property
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // handle the email and password submit login
  function handleNextSubmit(e) {
    e.preventDefault();
    try {
      // check if the email contain @gmail.com or not
      if (!emailRegex.test(email))
        throw new Error("Please Enter a Valid Email");

      // check if the length of minimum 8 characters
      if (password.length < 8)
        throw new Error("Password Length must be of 8 characters");

      // sign-up logic here
      if (pathname == "/auth/signup") {
        // check for the sign-up case
        console.log(name == "");
        if (email == "" || password == "" || name == "") {
          throw new Error("All fields are mandatory");
        }
        // empty the error message
        if (error != "") {
          setError("");
        }
        // dispatch the action that performs the action to the backend
        dispatch(signUp({ name, email, password }));
      } else if (pathname == "/auth/login") {
        // login logic here
        if (email == "" || password == "") {
          throw new Error("All fields are mandatory");
        }
        if (error != "") {
          setError("");
        }
        dispatch(login({ name, email, password, state: "login" }));
      }
    } catch (err) {
      setError(err.message);
    }
  }

  // handle google auth
  function handleGoogleSubmit(e) {
    e.preventDefault();
    console.log("google");
  }

  return (
    <form className="form-field">
      {/* sign-up-login logo */}
      <div className="form-title">
        <h1>{pathname == "/auth/signup" ? "Sign Up" : "Login"}</h1>
      </div>

      {/* input fields */}
      {pathname == "/auth/signup" ? (
        <Input type="name" value={name} setData={setName} />
      ) : (
        ""
      )}

      <Input type="email" value={email} setData={setEmail} />

      <Input type="password" value={password} setData={setPassword} />

      {/* submit buttons */}
      <div className="btn next-submit-btn">
        <ContinueWithBtn data="Next" submit={handleNextSubmit} />

        {/* display the error if any */}
        <div className="error-msg-wrapper">
          {error != "" ? <p className="error-message">{error}</p> : ""}
        </div>
        {/* internal or horizontal style */}
        <div className="or">
          <div className="section-line"></div>
          <p>Or</p>
          <div className="section-line"></div>
        </div>
        <ContinueWithBtn
          data="Sign Up With Google"
          img={GoogleLogo}
          submit={handleGoogleSubmit}
        />
      </div>
    </form>
  );
}

export default Form;
