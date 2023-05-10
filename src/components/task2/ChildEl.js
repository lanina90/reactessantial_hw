import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incActionCreator} from "./counterAction";

const ChildEl = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button
        className={'child-btn'}
        onClick={() => dispatch(incActionCreator())}
      >INC</button>
    </div>
  );
};

export default ChildEl;