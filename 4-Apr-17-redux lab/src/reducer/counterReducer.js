import { ActionSample } from '../action'

// const INITIAL_STATE = {

// }

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ActionSample.INC:
            return state + 1
        case ActionSample.DEC:
            return state - 1
        default:
            return state
    }
}