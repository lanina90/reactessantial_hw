import React, {useState} from 'react';
import DialogWindow from ".//DialogWindow";
import ToDoList from "../TODOMUI/ToDoList";
import {useSelector} from "react-redux";

const Task3 = () => {

  const tasks = useSelector(state => state.tasks)
  return (
    <div className="todo-list">
      <h1>TODO List</h1>
      <div className="todo-input">
        <DialogWindow/>
      </div>
      <ToDoList tasks={tasks}/>
    </div>
  );
};

export default Task3;