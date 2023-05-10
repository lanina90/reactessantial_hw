import React, {useState} from 'react';
import Icon from "../icons/Icon";


const Task1 = () => {

  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])

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
        <input
          type="text"
          value={text}
          onChange={textChangeHandler}
          placeholder="Add a new item..." />
        <button onClick={addTaskHandler}>
          <Icon type="add" />
        </button>
      </div>
      <ul className="items-list">
        {tasks.map(task => (
          <li key={task.id} className={`item ${task.done ? ' done' : ''}`}>
            {task.done ? <Icon fill="red" type="done" onClick={() => doneTaskHandler(task.id)}/> : ''}
            <span className="item-text">{task.text}</span>
            {task.done ? <button
              onClick={() => doneTaskHandler(task.id)}>Remove a mark</button> : <button onClick={() => doneTaskHandler(task.id)}>Mark as Done</button> }
            <Icon fill="red" stroke="red" type="delete" onClick={() => deleteTaskHandler(task.id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task1;