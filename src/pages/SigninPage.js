import React, { useState } from "react";
import "./page.css";
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnEye = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="form_container">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label style={{ fontWeight: "bold", fontSize: "x-large" }}>
            Enter Email
          </label>
          <input
            type="email"
            placeholder="please enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label style={{ fontWeight: "bold", fontSize: "x-large" }}>
            Enter Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type={isShown ? "input" : "password"}
            placeholder="please enter password"
          />
          {isShown ? (
            <img
              style={{
                position: "relative",
                bottom: "40px",
                left: "370px",
                cursor: "pointer",
              }}
              src="./hide.png"
              alt="hide"
              height="20px"
              width="20px"
              onClick={handleOnEye}
            />
          ) : (
            <img
              style={{
                position: "relative",
                bottom: "40px",
                left: "370px",
                cursor: "pointer",
              }}
              src="./view.png"
              alt="view"
              height="20px"
              width="20px"
              onClick={handleOnEye}
            />
          )}
        </div>
        <div>
          <button className="sign_button">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
