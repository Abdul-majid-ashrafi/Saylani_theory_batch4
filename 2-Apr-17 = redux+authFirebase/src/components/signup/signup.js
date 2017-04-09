import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
// import { AuthAction } from '../../store/action/authAction'
import { FirebaseAuthService } from '../../store/middleware/auth'


class Signup extends Component {
    // clickMe() {
    //     this.context.router.push({
    //         pathname: '/home'
    //     })
    // }

    createUser(ev) {
        ev.preventDefault()
        let user = {
            email: this.refs.email.value,
            pass: this.refs.pass.value,
            name: this.refs.name.value
        }
        this.props.signUpUser(user)
        // firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
        //     .then((user) => {
        //         console.log(user)
        //     })
        //     .catch((error) => {
        //         console.log(error.message)
        //     });
    }
    render() {
        // console.log(this.props)
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

// const mapStateToProps = (state) => {
//     return {
//         saylani_welfare_com : state
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (userAuth) => {
            dispatch(FirebaseAuthService.registerUserOnFirebase(userAuth))
        }
    }
}

export default connect(null, mapDispatchToProps)(Signup)