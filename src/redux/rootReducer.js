import {combineReducers} from "redux";
import counterReducer from "../components/counter/counterReducer";
import inputReducer from "../components/input/inputReducer";
import {listReducer} from "../components/TODOMUI/listReducer";


export default combineReducers({
  count: counterReducer,
  input: inputReducer,
  tasks: listReducer
})