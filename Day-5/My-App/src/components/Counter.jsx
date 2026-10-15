import React,{useState} from 'react'

const Counter = () => {

    const [count ,setCount] = useState(0);

    const incr = () => {
        setCount((prev) => prev+1);
    }

    const decr = () => {
        setCount((prev) => (prev > 0 ? prev-1 : 0));
    }

    const reset = () =>{
        setCount(0);
    }

  return (
    <>
      
      <h3>Counter : {count}</h3>
      <button onClick={incr}>INC</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decr}>DEC</button>

    </>
  )
}

export default Counter
