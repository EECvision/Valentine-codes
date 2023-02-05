import { Button, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import ExpensesPopup from "../Popup/ExpensesPopup/ExpensesPopup";
import classes from "./Expenses.module.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [togglePopup, setTogglePopup] = useState(false);
  const [categories, setCategories] = useState(["Category A", "Category B", "Category C"]);
  const [activeCategory, setActiveCategory] = useState("");

  const handleSelectChange = (event) => {
    setActiveCategory(event.target.value);
    if (!event.target.value) return setFilteredExpenses(expenses);
    const filtered = expenses.filter((exp) => exp.category === event.target.value);
    setFilteredExpenses(filtered);
  };

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  return (
    <div className={classes.container}>
      {togglePopup ? (
        <ExpensesPopup
          setExpenses={setExpenses}
          setCategories={setCategories}
          categories={categories}
          onClose={() => setTogglePopup(false)}
        />
      ) : null}
      <div className={classes.profile}></div>
      <div className={classes.control}>
        <Button onClick={() => setTogglePopup(true)} variant="contained">
          Add new expenses
        </Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Categories</InputLabel>
          <Select value={activeCategory} onChange={handleSelectChange} label="Category">
            <MenuItem value="">All</MenuItem>
            {categories.map((category, idx) => (
              <MenuItem key={idx} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.expensesContainer}>
        {filteredExpenses.map(({ expenses, amount, date, category }, idx) => (
          <div key={idx} className={classes.expenses}>
            <div>{expenses}</div>
            <div>{amount}</div>
            <div>{date}</div>
            <div>{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
