import React, {useState} from 'react';
import {useSelector} from "react-redux";



const Input = (props) => {

  const text = useSelector(state => state.input.text)

  return (
    <div>
      <input
        type="text"
        value= {text}
        onChange={props.onChange}
        placeholder="Add a new item..." />
    </div>
  );
};

export default Input;