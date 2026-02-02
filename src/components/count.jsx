import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increaseBy, setIncrementBy] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function increaseIncrement() {
    setIncrementBy(increaseBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(increaseBy - 1);
  }
  function newFlex (){
    if(increaseBy >5){
        return(
            <div>
                <h1>CHILL OUT BRO!!</h1>
            </div>
        )
    }
    return null ;
}

  return (
    <div>
      <h1> Count Value: {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>

      <h2>This value would increase by :{increaseBy}</h2>
      <button onClick={increaseIncrement}>increase increment </button>
      <button onClick={decreaseIncrement}>decrease Increment</button>
      <h3> {newFlex() }</h3>
    </div>
  );
}
