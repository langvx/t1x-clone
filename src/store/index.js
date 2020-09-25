// Store Index

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import locationData from "reducers/getLocation";
import userData from "reducers/authReducer";

const reducer = combineReducers({
  //state
  locationData,
  userData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunk))
);
