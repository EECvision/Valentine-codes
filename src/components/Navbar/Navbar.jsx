import classes from "./Navbar.module.css";

function Header() {
  return (
    <div className={classes.Navbar}>
      <a className={classes.navbrand} href="www.page.com">
        Moneywise
      </a>

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
