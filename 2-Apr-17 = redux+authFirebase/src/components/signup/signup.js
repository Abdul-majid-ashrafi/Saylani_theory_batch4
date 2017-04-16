import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
// import { AuthAction } from '../../store/action/authAction'
import { FirebaseAuthService } from '../../store/middleware/auth'


class Signup extends Component {

    createUser(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value,
            name: this.refs.name.value
        }
        this.props.signUpUser(user)
    }
    render() {
        return (
            <div>
                <h1>
                    Signup page
                </h1>
                <Link to="/">Login</Link>
                <form>
                    <label htmlFor="email">
                        <input type="text" id="email" ref="email" defaultValue="e.g@yahoo.com" />
                    </label>
                    <label htmlFor="pass">
                        <input type="password" id="pass" ref="pass" defaultValue="******" />
                    </label>
                    <label htmlFor="name">
                        <input type="text" id="name" ref="name" defaultValue="ali" />
                    </label>

                    <button onClick={this.createUser.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (userAuth) => {
            dispatch(FirebaseAuthService.registerUserOnFirebase(userAuth))
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup)