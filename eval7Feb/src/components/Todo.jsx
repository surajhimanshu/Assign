import React from 'react';
import TodoInput from "./TodoInput"
import TodoList from './TodoList';
import TodoComplete from './TodoComplete';

function Todo() {
    const [todos,setTodos] = React.useState([]);
    const [completedValue,setCompValue] = React.useState([]);
    const onDelete = (item) =>{
        const newt = todos.filter(todo => todo.id !== item.id)
        setTodos(newt)
    }

    console.log(completedValue,"comp")
  return (
  <div>
    <TodoInput todos = {todos} setTodos={setTodos}/>
    <div>
        <ul>
        {todos.map((todo) => (
             <TodoList key ={todo.id} todo={todo} setCompValue={setCompValue} onDelete = {onDelete} completedValue={completedValue}/>
        ))}
        </ul>
    </div>

    <div>
    <h1>Complete Value</h1>
        <ul>
        {completedValue.map((todo) => (
             <TodoList key ={todo.id} todo={todo} />
        ))}
        </ul>
    </div>
    
   </div>
  );
}

export default Todo;
