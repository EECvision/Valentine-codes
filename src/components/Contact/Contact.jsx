// import { Button } from '@mui/material';
import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.Contactsection}>
      <div className={classes.Contacts}>
        <div className={classes.Subcontact}>
          <h3 className={classes.Productname}>Moneywise</h3>
          <h4 className={classes.Productdescription}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </h4>

          <div className={classes.Socialicons}>
            <span className={classes.icons}>
              <i className="fab fa-facebook-f" />
            </span>
            <span className={classes.icons}>
              <i className="fab fa-twitter" />
            </span>
            <span className={classes.icons}>
              <i className="fab fa-instagram" />
            </span>
            <span className={classes.icons}>
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>

        <div className={classes.Subcontact}>
          <h3 className={classes.Company}>Company</h3>
          <h4 className={classes.Companylist}>About Us</h4>
          <h4 className={classes.Companylist}>Features</h4>
          <h4 className={classes.Companylist}>Get started</h4>
          <h4 className={classes.Companylist}>FAQs</h4>
        </div>

        <div className={classes.Subcontact}>
          <h3 className={classes.Resources}>Resources</h3>
          <h4 className={classes.Resourceslist}>Excepteur</h4>
          <h4 className={classes.Resourceslist}>Excepteur</h4>
          <h4 className={classes.Resourceslist}>Excepteur</h4>
          <h4 className={classes.Resourceslist}>Excepteur</h4>
        </div>

        <div className={classes.Subcontact}>
          <h3 className={classes.Newsletter}>Join Our Newsletter</h3>

          <form>
            <div className={classes.formgroup}>
              <input
                type="text"
                className={classes.forminput}
                placeholder="Email address"
                required
              />
              <input className={classes.Signupbutton} type="submit" value="Subcribe" />
            </div>
          </form>

          {/* <h4 className={classes.Newsletterdescription}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4> */}
        </div>
      </div>
      <p className={classes.Copyright}>Copyright © Moneywise 2023 </p>
    </div>
  );
}

export default Contact;
