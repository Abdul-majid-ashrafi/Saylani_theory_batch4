import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {


  submit() {
    var userObj = {
      firstName: "Majid",
      lastName: "Ashraf",
      email: "majid@gmail.com",
      password: "mani12",
      number: 12345678
    }

    return axios.post('http://localhost:3000/CREATEUSER', userObj)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.submit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default App;
