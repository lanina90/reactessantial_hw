import initialStore from "../../redux/initialStore";
import {ADD_TASK, DONE_TASK, REMOVE_TASK} from "./toDoListActions";

export const listReducer = (tasks = initialStore.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...tasks, action.payload]

    case REMOVE_TASK:
      return tasks.filter(task => task.id !== action.payload.id)

    case DONE_TASK:
      return (
        tasks.map(task => {
          if (task.id === action.payload.id) {
            return {...task, done: !task.done};
          }
          return task;
        }))

    default:
      return tasks
  }
}