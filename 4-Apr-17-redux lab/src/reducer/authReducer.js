import { ActionSample } from '../action'

const INITIAL_STATE = {
    isLogin: false,
    user: {}
    , isRegistered: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionSample.SIGNUP:
            return state = { isRegistered: true, user: action.value }
        case ActionSample.SIGNIN:
            return state = { isLogin: true }
        default:
            return state
    }
}
