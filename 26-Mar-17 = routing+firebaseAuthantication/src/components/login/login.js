import React, { Component } from 'react';
import { Link } from 'react-router'

class Login extends Component {
    clickMe() {
        this.context.router.push({
            pathname: '/home'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Login page
                </h1>
                <form>
                    <label htmlFor="email">
                        <input type="text" id="email" defaultValue="e.g@yahoo.com" />
                    </label>
                    <label htmlFor="pass">
                        <input type="password" id="pass" defaultValue="******" />
                    </label>
                    <button onClick={this.clickMe.bind(this)}>Add</button>
                </form>
                <Link to="/signup">Create a account</Link>
            </div>
        )
    }
}
// Login.contextTypes = {
//     router: React.PropTypes.object
// }
export default Login;
