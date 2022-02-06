import React, { useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';
import styles from "./todo.module.css";

function TodoInput({ todos, setTodos }) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.todo_input_container}>
      <input
      className={styles.todo_input}
        placeholder="Write something"
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button 
        onClick={() => {
          if (value) {
            setTodos([...todos, {
                value,
                id:v4()
            }]);
            setValue("");
          } else {
            console.log("give value");
          }
        //   console.log(todos)
        } }
        className={styles.todo_input_button}
      > +</button>
    </div>
  );
}

export default TodoInput;
