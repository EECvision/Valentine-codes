import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Header() {
  return (
    <div className={classes.navbar}>
      <img className={classes.navbrand} src="/src/assets/smartplan-logo-1.png" alt="budget-img" />

      <div className={classes.navbutton}>
        <Link to="/register">
          <button type="button" className={classes.button}>
            Get Started
          </button>
        </Link>

        <Link to="/login">
          <button type="button" className={classes.button}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
