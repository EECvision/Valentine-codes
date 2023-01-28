// import { Button } from '@mui/material';
import classes from "./Signup.module.css";

function Signup() {
  return (
    <div className={classes.Signupsection}>
      <div className={classes.Signupcontent}>
        <h2 className={classes.Signuptext}>
          Ready to stay on top of your expenses and reach your financial goals? Choose Moneywise
          today.
        </h2>
      </div>

      <div className={classes.Signupform}>
        <form className={classes.Signupform}>
          <div className={classes.formgroup}>
            {/* <label for="Text" htmlFor={domId} className={classes.formtext}>Email address</label> */}
            <input type="text" className={classes.forminput} placeholder="Username" required />
          </div>

          <div className={classes.formgroup}>
            {/* <label for="Password" className={classes.formtext} >Password</label> */}
            <input type="password" className={classes.forminput} placeholder="Password" required />
          </div>

          <input className={classes.Signupbutton} type="submit" value="Get Started" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
