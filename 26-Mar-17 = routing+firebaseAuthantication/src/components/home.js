import React, { Component } from 'react';
import { Link } from 'react-router'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    Home page
                    <br />
                    <Link to="/">home</Link>
                </h1>
            </div>
        )
    }
}


export default Home;
