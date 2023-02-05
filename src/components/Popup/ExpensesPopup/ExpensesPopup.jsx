import classes from "./ExpensesPopup.module.css";
import CloseIcon from "@mui/icons-material/Close"; // add this to package.json file
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

/* eslint react/prop-types: 0 */
const ExpensesPopup = ({ onClose, categories, setCategories, setExpenses: _setExpenses }) => {
  const d = new Date();
  const date = d.toString().split(" ").splice(0, 4).join(" ");

  const [expenses, setExpenses] = useState({
    expenses: "",
    amount: "",
    date,
    category: "",
  });
  const [activeCategory, setActiveCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSelectChange = (event) => {
    setActiveCategory(event.target.value);
    setExpenses((e) => ({ ...e, category: event.target.value }));
    setNewCategory("");
  };

  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
    setExpenses((e) => ({ ...e, category: event.target.value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenses((e) => ({ ...e, [name]: value }));
  };

  const handleSave = () => {
    const expensesArr = Object.values(expenses);
    const res = expensesArr.every((e) => e);
    if (!res) return setIsError(true);
    if (newCategory) {
      setCategories((category) => [...category, newCategory]);
    }
    _setExpenses((e) => [...e, expenses]);
    setExpenses({
      expenses: "",
      amount: "",
      date: "",
      category: "",
    });
    setActiveCategory("");
    onClose(false);
  };

  useEffect(() => {
    console.log({ newCategory });
  }, [newCategory]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.closeIcon}>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.heading}>Add your expenses</div>

        <div className={classes.inputContainer}>
          <TextField
            error={!expenses.expenses && isError}
            fullWidth="100%"
            name="expenses"
            label="expenses"
            type="text"
            variant="standard"
            value={expenses.expenses}
            onChange={handleInputChange}
          />
          <TextField
            error={!expenses.amount && isError}
            fullWidth="100%"
            name="amount"
            label="amount spent"
            type="number"
            variant="standard"
            value={expenses.amount}
            onChange={handleInputChange}
          />
          <div className={classes.date}>{date}</div>
        </div>
        <div className={classes.buttonContainer}>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
              <InputLabel error={!activeCategory && isError}>Select an expense category</InputLabel>
              <Select value={activeCategory} onChange={handleSelectChange} label="Category">
                {categories.map((category, idx) => (
                  <MenuItem key={idx} value={category}>
                    {category}
                  </MenuItem>
                ))}
                <MenuItem value="">Reset</MenuItem>
              </Select>
            </FormControl>
            {!activeCategory && (
              <>
                <div>or</div>
                <div className={classes.newCategory}>
                  <div>create new</div>
                  <TextField
                    variant="standard"
                    value={newCategory}
                    onChange={handleNewCategoryChange}
                  />
                </div>
              </>
            )}
          </div>
          <button onClick={handleSave}>+ Add</button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPopup;
