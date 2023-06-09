import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
