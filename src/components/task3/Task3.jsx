import React, {useState} from 'react';
import DialogWindow from "../task3/DialogWindow";
import ToDoList from "../TODOMUI/ToDoList";

const Task3 = () => {

  return (
    <div className="todo-list">
      <h1>TODO List</h1>
      <div className="todo-input">
        <DialogWindow/>
      </div>
      <ToDoList/>
    </div>
  );
};

export default Task3;