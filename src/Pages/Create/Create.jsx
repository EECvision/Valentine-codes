import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Budget from "../../components/Budget/Budget";
import Expenses from "../../components/Expenses/Expenses";
import classes from "./Create.module.css";

// const valideRoutes = ["expenses", "budget"];

function Create() {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Header</div>
      <div className={classes.container}>
        <div className={classes.sidePanel}>
          <div
            onClick={() => navigate("/create/expenses")}
            className={`${classes.createType} ${type === "expenses" && classes.active}`}>
            Track you expenses
          </div>
          <div
            onClick={() => navigate("/create/budget")}
            className={`${classes.createType} ${type === "budget" && classes.active}`}>
            My Budget
          </div>
        </div>
        <div className={classes.mainPanel}>
          {type === "expenses" ? (
            <Expenses />
          ) : type === "budget" ? (
            <Budget />
          ) : (
            <div className={classes.errorPage}>
              <div>invalid route</div>
              <Link to="/">
                <Button variant="outlined">Go to Dashboard</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
