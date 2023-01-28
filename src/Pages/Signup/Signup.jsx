import { useState } from "react";
import classes from "./Signup.module.css";

const errorMessages = {
  email: "Email address is required",
  password: "Password must be at least 4 characters",
};

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFirstnameChange = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };

  const handleLastnameChange = (event) => {
    const value = event.target.value;
    setLastname(value);
  };

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
    console.log({ email, password, firstname, lastname });
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <p className={classes.signuptext}> Create an account </p>

        <div className={classes.signupform}>
          <form onSubmit={handleSubmit}>
            <div className={classes.formgroup}>
              <label className={classes.formtext}>First name</label>
              <input
                className={classes.inputbox}
                type="text"
                id="firstnameInput"
                value={firstname}
                placeholder="First name"
                required
                onChange={handleFirstnameChange}
              />
            </div>

            <div className={classes.formgroup}>
              <label className={classes.formtext}>Last name</label>
              <input
                className={classes.inputbox}
                type="text"
                id="lastnameInput"
                value={lastname}
                placeholder="Last name"
                required
                onChange={handleLastnameChange}
              />
            </div>

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

            <input className={classes.submit} type="submit" value="SUBMIT" onClick={handleSubmit} />
          </form>
        </div>

        <div className={classes.signupextras}>
          <div>
            <a href="#" className={classes.signupgoogle}>
              <img
                src="https://img.icons8.com/color/48/null/google-logo.png"
                className={classes.googleicon}
              />
              <span className={classes.sign}>Sign up with Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
