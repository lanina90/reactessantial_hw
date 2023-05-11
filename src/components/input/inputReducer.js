import {SET_TEXT} from "./inputActions";
import initialStore from "../../redux/initialStore";

const initialState = {
  text: '',
};

const inputReducer = (state = initialStore.input.text, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default inputReducer;