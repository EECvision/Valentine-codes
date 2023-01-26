import { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({
  index,
  todo,
  handleDeleteItem,
  handleUpdateItem,
  handleItemInputChange,
  itemInputValue,
}) => {
  const [showItemEditorInput, setShowItemEditorInput] = useState(-1);

  const handleSave = () => {
    setShowItemEditorInput(false);
    handleUpdateItem(index);
  };

  return (
    <div className={classes.todoItem} key={index}>
      <div className={classes.todoWrapper}>
        <div className={classes.item}>{todo}</div>
        <div
          onClick={() => setShowItemEditorInput(index)}
          className={classes.updateBtn}
        >
          Update
        </div>
        <div onClick={() => handleDeleteItem(index)} className={classes.delBtn}>
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
          <button onClick={handleSave} className={classes.saveBtn}>
            save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TodoItem;
