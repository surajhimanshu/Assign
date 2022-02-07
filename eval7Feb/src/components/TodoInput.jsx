import React from "react";
import {v4 as uuidv4,v4} from 'uuid'
import styles from "./todo_input.module.css"


function TodoInput({todos,setTodos}) {
  const [value, setValue] = React.useState("");
  
  return (
    <div className={styles.input_container}>
    <button 
        onClick={()=> {
            setTodos([...todos,{
                value,
                id:v4()
            }])
        }}
    >+</button>
      <input
        value={value}
        placeholder="Add a to-do..."
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      </div>
   );
  
}

export default TodoInput;
