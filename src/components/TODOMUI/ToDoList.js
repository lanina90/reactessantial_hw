import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Icon from "../icons/Icon";
import {doneTaskAction, removeTaskAction} from "./toDoListActions";

const ToDoList = (props) => {

  const dispatch = useDispatch()
  const tasks = props.tasks;

  return (
    <div>
      <ul className="items-list">
        {tasks.map(task => (
          <li key={task.id} className={`item ${task.done ? ' done' : ''}`}>
            {task.done ?
              <Icon
                fill="red"
                type="done"
                onClick={() => dispatch(doneTaskAction(task.id))}/> : ''}
            <span className="item-text">{task.text}</span>
            {task.done ?
              <button
                onClick={() => dispatch(doneTaskAction(task.id))}>Remove a mark</button> :
              <button
                onClick={() => dispatch(doneTaskAction(task.id))}>Mark as Done</button> }
            <Icon
              fill="red"
              stroke="red"
              type="delete"
              onClick={() => dispatch(removeTaskAction(task.id))}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;