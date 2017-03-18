import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'



class App extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)

    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    let refRoot = firebase.database().ref('/todo/')
    refRoot.on("child_added", (snap) => {
      let currentTodo = this.state.todos
      currentTodo.push(snap.val())
      this.setState({ todos: currentTodo })
    })
  }

  addTodo(ev) {
    ev.preventDefault()
    let refRoot = firebase.database().ref('/todo/')
    refRoot.push({ todo: this.refs.todo.value })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        {/*<div className="App-header">*/}
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo</h2>
          <form onSubmit={this.addTodo}>
            <input type="text" ref="todo" placeholder="Write your todo" />
            <button>Add Todo</button>
          </form>
          {this.state.todos.map((v, index) => {
            return (
              <h2 key={index}>{v.todo}</h2>

            )
          })}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
