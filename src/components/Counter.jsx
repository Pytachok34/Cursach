import React, { useState } from "react";

const Counter = function()
{
    const [count, SetCount]=useState(0)
    function increment()
    {
        SetCount(count+1)
    }
  
    function decrement()
    {
        SetCount(count-1)
    }
    return(
        <div>
      <h1>
        {count}
      </h1>
      <button onClick={increment}>Нажми меня up</button>
      <button onClick={decrement}>Нажми меня down</button>
        </div>
    )
}
export default Counter;