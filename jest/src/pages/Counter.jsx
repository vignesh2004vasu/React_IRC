import React, { useState } from 'react'

function Counter() {

  const [count,setCount]=useState(0)

  const incre =()=>{

    setCount(count+1)
  }
  const decre =()=>{

    setCount(count-1)
  }
  return (
    <>
    <button onClick={incre}>Increment</button>
    <p>{count}</p>
    <button onClick={decre}>Decrement</button>

    
    </>
  )
}

export default Counter