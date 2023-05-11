export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const DONE_TASK = "DONE_TASK"


export const addTaskAction = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export const removeTaskAction = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}

export const doneTaskAction = (id) => {
  return {
    type: DONE_TASK,
    payload: {id}
  }
}
