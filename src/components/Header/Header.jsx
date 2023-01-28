// import { Button } from '@mui/material';
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Main}>
      <div className={classes.Header}>
        <div className={classes.Headercontent}>
          <h1 className={classes.Headertitle}>
            Gaining control of your finances has never been easier
          </h1>
          <h4 className={classes.Headersubtitle}>
            Introducing the Moneywise budgeting app for managing your finances! With our app, you
            can easily track your expenses, set financial goals, and create a personalized budget.
          </h4>
          <button type="button" className={classes.Headerbutton}>
            Get Started
          </button>
        </div>

        <div className={classes.Headercontent}>
          <img className={classes.Headerimg} src="/src/assets/img01.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
