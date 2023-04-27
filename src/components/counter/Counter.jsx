import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  function onPlusHandler () {
    setCount(count + 1)
  }

  function onMinusHandler () {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>Counter:</h2>
      <h1>{count}</h1>
      <button onClick={onPlusHandler} className="minus">Plus +</button>
      <button onClick={onMinusHandler} className="plus">- Minus</button>
    </div>
  );
};

export default Counter;