const InitialState = {
    email: '',
    password: ''
}
export const AuthReducer = (state = InitialState, action) => {
    // console.log('Reducer', action)
    switch (action.type) {
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload }
        default:
            return state
    }
}