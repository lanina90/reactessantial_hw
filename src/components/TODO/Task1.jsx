import React, {useState} from 'react';
import Icon from "../icons/Icon";
import {Input} from "@mui/material";
import ToDoList from "../TODOMUI/ToDoList";


const Task1 = () => {

  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([{ id: 1, text: "my first task", done: false }])

  const textChangeHandler = (event) => {
    setText(event.target.value);
  }

  const addTaskHandler = () => {
    if (text.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text,
        done: false,
      };

      setTasks([...tasks, newItem]);
      setText('');
    }
  }

  const doneTaskHandler = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }

  const deleteTaskHandler = (id) => {

    setTasks(tasks.filter(task => task.id !== id));
  }


  return (
    <div className="todo-list">
      <h1>TODO List</h1>
      <div className="todo-input">
        <Input onChange={textChangeHandler}/>
        <button onClick={addTaskHandler}>
          <Icon type="add" />
        </button>
      </div>
     <ToDoList tasks={tasks}/>
    </div>
  );
};

export default Task1;