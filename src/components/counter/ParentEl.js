import React, {useState} from 'react';
import ChildEl from "./ChildEl";
import {useDispatch, useSelector} from "react-redux";

const ParentEl = () => {


  const count = useSelector(state => state.count)

  return (
    <div>
      <h1>{count}</h1>
      <ChildEl/>
    </div>
  );
};

export default ParentEl;