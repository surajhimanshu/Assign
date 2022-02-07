import React from "react";
import styles from "./todo_list.module.css";

function TodoList({ todo ,setCompValue,completedValue,onDelete}) {
  const [isChecked, setIsChecked] = React.useState(false);
  console.log(todo.value);
  return (
    <li className={styles.container_list}>
      <input
        onChange={() => {
            setIsChecked(!isChecked);
            setCompValue([...completedValue,todo])
            onDelete((todo))
        }}
        className={styles.checkout_box}
        type="checkbox"
      />
      <span className={isChecked ? styles.strike:styles.normal}>{todo.value}</span>
      {/* <button>*</button> */}
    </li>
  );
}

export default TodoList;
