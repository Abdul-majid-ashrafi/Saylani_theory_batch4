import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { FirebaseAuthService } from '../../store/middleware/auth'

class Login extends Component {

    loginUser(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value,
        }
        this.props.loginUser(user)
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
                <Link to="/z">Create a account</Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => {
            dispatch(FirebaseAuthService.loginOnFirebase(user))
        }
    }
}
export default connect(null, mapDispatchToProps)(Login)
