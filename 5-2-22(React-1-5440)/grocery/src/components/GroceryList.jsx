import React from 'react';
import styles from "./grocerylist.module.css"

function GroceryList({grocer,onDeleteItem}) {
  return (<div className={styles.container_groc}>
    <p>{grocer.value}</p>
    <button onClick={() => onDeleteItem(grocer)}>Delete</button>
  </div>);
}

export default GroceryList;
