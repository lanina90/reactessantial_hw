import React, {useState} from 'react';

const Task2 = () => {

  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [numberOneResult, setNumberOneResult] = useState('')
  const [numberTwoResult, setNumberTwoResult] = useState('')


  const handleChangeNumberOne = event => {
    const value = event.target.value;
    setNumberOne(value);
    setNumberOneResult(value * 0.5);
  }

  const handleChangeNumberTwo = event => {
    const value = event.target.value;
    setNumberTwo(value);
    setNumberTwoResult(value * 0.05);
  }

  return (
    <div>
      <form className={'form'}>
        <input
          type="number"
          value={numberOne}
          onChange={handleChangeNumberOne}
        />
        <div>{numberOneResult}</div>
        <input
          type="number"
          value={numberTwo}
          onChange={handleChangeNumberTwo}
        />
        <div>{numberTwoResult}</div>
      </form>
    </div>
  );
};

export default Task2;