import { combineReducers } from 'redux'
import { AuthReducer } from './authReducer'

export default combineReducers({
    authanticationReducer: AuthReducer
})