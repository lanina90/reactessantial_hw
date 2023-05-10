import {combineReducers} from "redux";
import counterReducer from "../components/task2/counterReducer";


export default combineReducers({
  count: counterReducer
})