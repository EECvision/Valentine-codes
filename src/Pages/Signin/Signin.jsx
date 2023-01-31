import classes from "./Signin.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const errorMessages = {
  email: "Email address is required",
  password: "Password must be at least 4 characters",
};

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


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

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/dashboard");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Login Successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

    <div className={classes.main}>
      <div className={classes.signinsection}>
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

        <Link to="/forgotpassword" className={classes.forgotpassword}>
          Forgot Password?
        </Link>

        <div className={classes.signinextras}>
          <div>
            <a className={classes.signingoogle}>
              <img
                src="https://img.icons8.com/color/48/null/google-logo.png"
                className={classes.googleicon}
              />
              <span className={classes.sign} onClick={signInWithGoogle}>
                Sign in with Google
              </span>
            </a>

            <h6 className={classes.createaccount}>
              New User?{" "}
              <Link to="/register" className={classes.accountlink}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Signin;
