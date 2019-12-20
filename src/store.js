import { createStore, applyMiddleware } from "redux";
import demoReducer from './demoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from 'redux-logger'
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const DEBUG=false
const middlewares = [thunk, DEBUG && logger].filter(Boolean)

const store = createStore(demoReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;