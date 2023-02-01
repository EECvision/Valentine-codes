import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={classes.mainheader}>
      <div className={classes.header}>
        <div className={classes.headercontent}>
          <h1 className={classes.headertitle}>
            Gaining control of your finances has never been easier
          </h1>
          <h4 className={classes.headersubtitle}>
            Introducing the Smartplan budgeting app for managing your finances! With our app, you
            can easily track your expenses, set financial goals, and create a personalized budget.
          </h4>

          <Link to="/register">
            <button type="button" className={classes.Headerbutton}>
              Get Started
            </button>
          </Link>
          
        </div>

        <div className={classes.headercontent}>
          <img className={classes.headerimg} src="/src/assets/img01.png" alt="budget-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
