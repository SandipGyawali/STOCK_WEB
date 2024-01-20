import Form from "../features/Auth/components/Form";
import AuthImg from "../assets/images/Financial.png";
import "../features/Auth/components/auth.css";
import "../features/Auth/components/auth.css";

function AuthPage() {
  return (
    <div className="auth-wrapper">
      <div className="form-wrapper">
        {/* form */}
        <Form />
        {/* auth page image */}
        <div className="auth-img">
          <img src={AuthImg} alt="finance-img" className="auth-image" />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
