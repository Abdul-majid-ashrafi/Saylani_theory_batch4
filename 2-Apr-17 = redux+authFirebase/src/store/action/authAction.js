export class AuthAction {
    static SIGNUP = "SIGNUP"
    static LOGIN = "LOGIN"
    static LOGOUT = "LOGOUT"
    static LOGOUT_REJECT = "LOGOUT_REJECT"
    static SIGNUP_REJECT = "SIGNUP_REJECT"
    static LOGIN_REJECT = "LOGIN_REJECT"


    static signupSuccessFull() {
        return {
            type: AuthAction.SIGNUP
        }
    }

    static signupReject(reason) {
        return {
            type: AuthAction.SIGNUP_REJECT,
            value: reason
        }
    }

    static loginSuccessFull(authUser) {
        return {
            type: AuthAction.LOGIN,
            value: authUser
        }
    }

    static loginReject(reason) {
        return {
            type: AuthAction.SIGNUP_REJECT,
            value: reason
        }
    }


    static logOutUser() {
        return {
            type: AuthAction.LOGOUT
        }
    }

    static logOutUserReject(reason) {
        return {
            type: AuthAction.LOGOUT_REJECT,
            value: reason
        }
    }


}