import React, { useState } from "react";
import styles from "./todo.module.css";

function Todo({ todo,onDeleteItem }) {
  const [isStricked, setIsStricked] = useState(false);
  return (
    <li className={styles.todoItem}>
      <input className={styles.todo_CheckBox} type="checkbox" onChange={() => setIsStricked(!isStricked)} />
      <span className={isStricked ? styles.strike:styles.normal}>{todo.value}</span>
      {/* <button onClick={() => onDeleteItem(todo)}>Delete</button> */}
    </li>
  );
}

export default Todo;




// import React, { useState } from "react";
// import styles from "./todo.module.css";
// import TodoInput from "./TodoInput";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   return (
//     <div>
//       <TodoInput todos={todos} setTodos={setTodos} />

//       <div>
//         <ul>
//           {todos.map((todo, index) => {
//             return (
//               <li className={styles.todoItem}>
//                 <input type="checkbox" />
//                 <span>{todo}</span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Todo;
