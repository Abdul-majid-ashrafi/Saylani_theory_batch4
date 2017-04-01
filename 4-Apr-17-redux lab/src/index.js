import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ActionSample } from './action'
import { authReducer} from './reducer/authReducer'
import { countReducer } from './reducer/counterReducer'

// import { createStore, combineReducers } from 'redux'
import { createStore, combineReducers } from 'redux'



let store = createStore(combineReducers({authReducer , countReducer}))

store.subscribe(() => {
  console.log("STORE CHANGED", store.getState())
})

store.dispatch({
  type: ActionSample.SIGNUP,
  value: { name: "Majid", email: "mani@mani.com" }
})

store.dispatch({
  type: ActionSample.INC,
  // value : {name: "Majid",email : "mani@mani.com"}
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
