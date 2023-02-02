import classes from "./ExpensesPopup.module.css";

/* eslint react/prop-types: 0 */
const ExpensesPopup = ({ onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div onClick={onClose}>close</div>
        <div>This is a popup</div>
      </div>
    </div>
  );
};

export default ExpensesPopup;
