import React, { Component } from 'react';
import { Home } from './home'


class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "Majid",
            age: 34
        }
    }
    render() {
        return (
            <div>
                App.js
             <Home myName={this.state.name}  myAge={this.state.age} />
            </div>
        )
    }
}

export default App