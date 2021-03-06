import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import heroReducer from "./reducers/heroesReducer";
import searchReducer from "./reducers/searchReducer";

const reducers = combineReducers({
  auth: authReducer,
  heroes: heroReducer,
  search: searchReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
