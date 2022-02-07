import React,{useState} from 'react';
import { v4 as uuidv4, v4 } from 'uuid';

function GroceryInput({grocerys,setGroceryAr}) {
    const [value,setValue] = useState("");
  return <>
      <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    <button onClick={()=>{
        setGroceryAr([...grocerys,{
            value,
            id:v4()
        }]);
    }}
    >Add grocery</button>
  </>;
}

export default GroceryInput;
