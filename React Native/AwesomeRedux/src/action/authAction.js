
export const emailChanged = (text) => {
    return {
        type: 'EMAIL_CHANGED',
        payload: text
    }
}

export const passwordChange = (text) => {
    return {
        type: 'PASSWORD_CHANGED',
        payload: text
    }
}