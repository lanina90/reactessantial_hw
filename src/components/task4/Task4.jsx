import React from 'react';

const Task4 = () => {

  function onDivClickHandle() {
    console.log('Div clicked')
  }

  function onBtnClickHandle(e) {
    e.stopPropagation()
    console.log('Button clicked')
  }

  return (
    <div onClick={onDivClickHandle} className='task4'>
      <button onClick={onBtnClickHandle} className='task4__btn'>Button</button>
    </div>
  );
};

export default Task4;