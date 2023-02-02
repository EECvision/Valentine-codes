import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./UserDashboard.module.css";

function UserDashboard() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Header</div>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.greetings}>User greetings</div>
          <div className={classes.descriptions}>some descriptions</div>
          <div className={classes.buttonContainer}>
            <Link to={"/create/expenses"}>
              <Button className={classes.button} variant="contained">
                My Expenses
              </Button>
            </Link>
            <Link to={"/create/budget"}>
              <Button className={classes.button} variant="contained">
                My Budget
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
