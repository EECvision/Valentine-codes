import { useState } from "react";
import classes from "./Signin.module.css";

const errorMessages = {
  email: "Email address is required",
  password: "Password must be at least 4 characters",
};

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setErrorMessage(errorMessages.email);
    }
    if (password === "") {
      setErrorMessage(errorMessages.password);
    }
    console.log({ email, password });
  };

  return (
    <div className={classes.main}>
      <p className={classes.signintext}>Login</p>

      <div className={classes.signinform}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formgroup}>
            <label className={classes.formtext}>Email address</label>
            <input
              className={classes.inputbox}
              type="text"
              id="emailInput"
              value={email}
              placeholder="Email address"
              required
              onChange={handleEmailChange}
            />
          </div>

          <div className={classes.formgroup}>
            <label className={classes.formtext}>Password</label>
            <input
              className={classes.inputbox}
              type="password"
              id="passwordInput"
              value={password}
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
          </div>

          {errorMessage ? <div className={classes.errorMessage}>{errorMessage}</div> : null}

          <input className={classes.submit} type="submit" value="LOGIN" />
        </form>
      </div>

      <a href="#" className={classes.forgotpassword}>
        Forgot Password?
      </a>

      <div className={classes.signinextras}>
        <div>
          <a href="#" className={classes.signingoogle}>
            <img
              src="https://img.icons8.com/color/48/null/google-logo.png"
              className={classes.googleicon}
            />
            <span className={classes.sign}>Sign in with Google</span>
          </a>

          <h6 className={classes.createaccount}>
            New User?{" "}
            <a href="#" className={classes.accountlink}>
              Create an account
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Signin;
