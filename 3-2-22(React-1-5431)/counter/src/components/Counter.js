import React,{useState} from 'react';

export const Counter = ({name}) => {
    const [count,setCount] = useState(0);


      //1st type
     return(
         <div className='counter-container'>
           {/* <h1>Hello {name}</h1> */}
           <h2>{count}</h2>
           <button onClick={() => setCount(count + 1)}>Increment</button>
           <button onClick={() => setCount(count - 1)}>Decrement</button>
           <button onClick={() => setCount(count * 2)}>Double the value</button>
      </div>
    );

            //2nd type
    // const changeValue = (count) => {
    //     setCount(count)
    // }
    // return(
    //      <div>
    //        <h1>Counter</h1>
    //        <h2>{count}</h2>
    //        <button onClick={() => changeValue(count + 1)}>Increment</button>
    //        <button onClick={() => changeValue(count - 1)}>Decrement</button>
    //        <button onClick={() => changeValue(count * 2)}>Decrement</button>
    //   </div>

    //3rd type
    // const increment = (count) => {
    //     setCount(count + 1)
    // }
    // const decrement = (count) => {
    //     setCount(count - 1)
    // }

    // return(
    //      <div>
    //        <h1>Counter</h1>
    //        <h2>{count}</h2>
    //        <button onClick={() => increment(count)}>Increment</button>
    //        <button onClick={() => decrement(count)}>Decrement</button>
    //   </div>
    // );

  
}




// export default Counter;
