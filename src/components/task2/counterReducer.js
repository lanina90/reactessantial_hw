import initialStore from "../../redux/initialStore";
import {INC} from "./counterAction";

const counterReducer = (count = initialStore.count, action) => {
  switch (action.type) {
    case INC:
      return ++count
    default:
      return count
  }
}

export default counterReducer