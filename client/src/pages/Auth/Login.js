/* eslint-disable react/jsx-pascal-case */
import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import SC from "../../themes/StyledComponents";
import "./Auth.scss";

export default function Login() {
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usermail.length > 0 && password.length > 0) {
      dispatch(
        login({
          usermail: usermail,
          password: password,
        })
      );
      setUsermail("");
      setPassword("");
    }
    setError(true);
    setErrorMessage("Username or password is incorrect");
  };

  useEffect(() => {
    if (usermail.length > 0 && password.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [usermail, password]);

  if (state._id) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-page">
      <SC.authContainer className="auth-container">
        <form onSubmit={isValid ? handleSubmit : null}>
          <div>
            <SC.authInput
              className="auth-input"
              type="text"
              placeholder="Username or email"
              onChange={(e) => setUsermail(e.target.value)}
              required
            ></SC.authInput>
          </div>

          <div>
            <SC.authInput
              className="auth-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            ></SC.authInput>
          </div>

          <SC.primaryColorButtonInverse className={`auth-button ${isValid}`}>
            Login
          </SC.primaryColorButtonInverse>
        </form>
      </SC.authContainer>
      <div className="auth-sub-container">
        <SC.textOnBgColor className="dont-have-an-account">
          Don't have an account?
          <Link to="/register">
            <SC.primaryColorText>Sign-up</SC.primaryColorText>
          </Link>
        </SC.textOnBgColor>
        {/* <div className="just-visiting-container">
                Wanna look around?{" "}
                <button onClick={justVisiting}>Just visiting</button>
              </div> */}
        {error && <span className="error-span">{errorMessage}</span>}
      </div>
    </div>
  );
}
