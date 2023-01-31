import classes from "./Navbar.module.css";

function Header() {
  return (
    <div className={classes.navbar}>
      <img className={classes.navbrand} src="/src/assets/smartplan-logo-1.png" alt="budget-img" />

      <div className={classes.navbutton}>
        <button type="button" className={classes.button}>
          Get Started
        </button>
        <button type="button" className={classes.button}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
