import { useEffect } from "react";
import { useState } from "react";
import classes from "./App.module.css";

// CRUD
/**
 * C - CREATE
 * R - READ
 * U - UPDATE
 * D - DELETE
 */

// equality in javascript

// Explain prop and state
// map =>
// filter =>
// reduce =>
// every =>
// some =>
// for-loop

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemInputValue, setItemInputValue] = useState({});
  const [todoItems, setTodoItems] = useState([]);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showItemEditorInput, setShowItemEditorInput] = useState(-1);

  const handleInputChange = (event) => {
    let value = event.target.value;
    setInputValue(value);
    setShowErrorMsg(false);
  };

  const handleButtonClick = () => {
    if (inputValue === "") return setShowErrorMsg(true);
    let newtodoItems = [...todoItems, inputValue];
    setTodoItems(newtodoItems);
    setInputValue("");
  };

  const handleDeleteItem = (id) => {
    console.log(`item ${id} deleted`);
    const newtodoItems = todoItems.filter((_, index) => index !== id);
    setTodoItems(newtodoItems);
  };

  const handleUpdateItem = (id) => {
    console.log(`updating ${todoItems[id]} with ${itemInputValue[id]}`);

    const newtodoItems = todoItems.map((a, index) => {
      if (index === id) return itemInputValue[id];
      return a;
    });

    setTodoItems(newtodoItems);
    setItemInputValue({ ...itemInputValue, [id]: "" });
    setShowItemEditorInput(false);
  };

  const handleItemInputChange = (event) => {
    const { id, value } = event.target;
    setItemInputValue({ ...itemInputValue, [id]: value });
  };

  useEffect(() => {
    // console.log("Todo items => ", todoItems);
  }, [todoItems]);

  useEffect(() => {
    // console.log(itemInputValue);
  }, [itemInputValue]);

  return (
    <div className={classes.app}>
      <div className={classes.title}>My Todo App</div>
      <input
        type="text"
        id="input 1"
        name="todo input"
        value={inputValue}
        onChange={handleInputChange}
        className={classes.todoInput}
      />
      {showErrorMsg ? (
        <div>input must not be empty</div>
      ) : (
        <div>Keep writing</div>
      )}
      <div className={classes.todoContainer}>
        {todoItems.map((todo, index) => (
          <div className={classes.todoItem} key={index}>
            <div className={classes.todoWrapper}>
              <div className={classes.item}>{todo}</div>
              <div
                onClick={() => setShowItemEditorInput(index)}
                className={classes.updateBtn}
              >
                Update
              </div>
              <div
                onClick={() => handleDeleteItem(index)}
                className={classes.delBtn}
              >
                Del
              </div>
            </div>
            {showItemEditorInput === index ? (
              <div className={classes.inputContainer}>
                <input
                  type="text"
                  id={index}
                  value={itemInputValue[index] || ""}
                  onChange={handleItemInputChange}
                />
                <button
                  onClick={() => handleUpdateItem(index)}
                  className={classes.saveBtn}
                >
                  save
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <br />
      <button className={classes.addBtn} onClick={handleButtonClick}>
        Add todo
      </button>
    </div>
  );
}

export default App;
