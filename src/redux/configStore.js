import {compose, createStore} from "redux";
import reducer from "./rootReducer";
import initialStore from "./initialStore";



const store = createStore(reducer, initialStore,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store