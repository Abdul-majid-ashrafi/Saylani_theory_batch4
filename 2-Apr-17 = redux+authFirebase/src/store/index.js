import { createStore, applyMiddleware, compose } from 'redux'
// import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './authReduces/authReducer'

// export const store = createStore(combineReducers({ AuthReducer }, {}, applyMiddleware(thunk)))
//////////////////////////////

const middleware = compose(
    applyMiddleware(thunk)
);
// const reducers = combineReducers({
//     AuthReducer
//     //more reducers here
// })
export const store = createStore(
    AuthReducer,
    middleware
)

/////////////////////////

store.subscribe(() => {
    console.log("STORE CHANGED", store.getState())
})
// store.dispatch({
//     type : 'SIGNUP',
//     value : "hwllo"
// })















