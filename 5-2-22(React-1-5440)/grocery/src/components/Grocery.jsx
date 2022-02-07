import React, { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

function Grocery() {
  const [grocerys, setGroceryAr] = useState([]);
  const onDeleteItem = (itemToDelete) =>{
    const newArr = grocerys.filter((gr) => gr.id !== itemToDelete.id )
    setGroceryAr(newArr)
  }

  return (
    <div>
      <GroceryInput grocerys={grocerys} setGroceryAr={setGroceryAr} />
      { grocerys.map((grocer) => (
      <GroceryList key= {grocer.id}  grocer={grocer} onDeleteItem={onDeleteItem}/>
       ))}
    </div>
  );
}

export default Grocery;
