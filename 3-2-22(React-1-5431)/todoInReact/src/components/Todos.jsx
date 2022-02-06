import React, { useState } from "react";
// import styles from "./todo.module.css";
import TodoInput from "./TodoInput.jsx";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const onDeleteItem = (itemToDelete) =>{
        const newToDoList = todos.filter(todo => todo.id !== itemToDelete.id);
        setTodos(newToDoList);
  }
  return (
    <div>
      

      <div>
        <ul>
          {todos.map((todo) => (
            <Todo key ={todo.id} todo={todo}  onDeleteItem={onDeleteItem}/>
          ))}
        </ul>
      </div>
      <TodoInput todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
