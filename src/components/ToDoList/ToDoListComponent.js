import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from './styles.module.scss'
import ChildComponent from "../ChildComponent";

const ToDoListComponent = () => {
  const [tasks, setTasks] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [user, setUser] = useState({ name: "John Doe", email: "john@doe.com" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/todos?limit=7');
        setTasks(data.todos)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  const addTaskHandler = () => {
    const newTask = {
      id: tasks.length + 1,
      todo: inputVal
    };
    setTasks([...tasks, newTask]);
    setInputVal('');
  }
  return (

    <div className={styles.list}>
      <ChildComponent user={user} />
      <h1>Tasks To Do</h1>
      {
        tasks.map(task =>  <li key={task.id}>{task.id}. {task.todo}</li>)
      }
      <p>Add new task:</p>
      <input
        value={inputVal}
        onChange={(e)=> setInputVal(e.target.value)}
        type="text"
      />
      <button
      onClick={addTaskHandler}>Add Task</button>

    </div>
  );
};

export default ToDoListComponent;