import { Button } from "@mui/material";
import { useState } from "react";
import ExpensesPopup from "../Popup/ExpensesPopup/ExpensesPopup";
import classes from "./Expenses.module.css";

const Expenses = () => {
  // const [expenses, setExpenses] = useState([]);
  const [togglePopup, setTogglePopup] = useState(false);

  return (
    <div className={classes.container}>
      {togglePopup ? <ExpensesPopup onClose={() => setTogglePopup(false)} /> : null}
      <div className={classes.profile}></div>
      <div className={classes.control}>
        <Button onClick={() => setTogglePopup(true)} variant="contained">
          Add new expenses
        </Button>
        <Button variant="contained">Filter section</Button>
      </div>
      <div className={classes.expensesContainer}></div>
    </div>
  );
};

export default Expenses;
