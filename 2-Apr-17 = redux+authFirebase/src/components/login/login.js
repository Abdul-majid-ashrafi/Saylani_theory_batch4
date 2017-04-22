import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { FirebaseAuthService } from '../../store/middleware/auth'

class Login extends Component {


    componentWillReceiveProps(nextProp) {
        if (nextProp.isLoggedin) {
            browserHistory.push('/home')
        }
    }

    loginUser(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value,
        }
        this.props.loginWithFirebase(user)
    }


    render() {
        return (
            <div>
                <h1>
                    Login page
                </h1>
                <form>
                    <label htmlFor="email">
                        <input type="text" id="email" ref="email" defaultValue="e.g@yahoo.com" />
                    </label>
                    <label htmlFor="pass">
                        <input type="password" id="pass" ref="pass" defaultValue="******" />
                    </label>
                    <button onClick={this.loginUser.bind(this)}>Login</button>
                </form>
                <Link to="/signup">Create a account</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedin: state.isLoggedin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginWithFirebase: (user) => {
            dispatch(FirebaseAuthService.loginOnFirebase(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
