import { useEffect } from "react";
import { useState } from "react";
import classes from "./App.module.css";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemInputValue, setItemInputValue] = useState({});
  const [todoItems, setTodoItems] = useState([]);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

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

    if (itemInputValue[id] === "") return console.log("no update found");
    // update todo items with the new value
    const newtodoItems = todoItems.map((a, index) => {
      if (index === id) return itemInputValue[id];
      return a;
    });

    setTodoItems(newtodoItems);
    setItemInputValue({ ...itemInputValue, [id]: "" });
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
        {todoItems.map((todoItem, index) => (
          <TodoItem
            key={index}
            todo={todoItem}
            index={index}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
            handleItemInputChange={handleItemInputChange}
            itemInputValue={itemInputValue}
          />
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
