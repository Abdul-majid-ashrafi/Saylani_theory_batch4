import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app/App';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './components/home';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/home" component={Home} />

                <Route path="/" component={App}>
                    <IndexRoute component={Login} />
                    {/*<IndexRoute component={SignUp} />*/}
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Route>

            </Router>
        )
    }
}
export default Routes;

{/*npm install react-router@^3.0.2*/ }
{/*npm install packge@version*/ }