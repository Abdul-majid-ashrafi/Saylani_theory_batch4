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
      var obj = snap.val();
      obj.id = snap.key
      this.state.todos.push(obj)
      this.setState({ todos: this.state.todos })
    })
  }

  addTodo(ev) {
    ev.preventDefault()
    let refRoot = firebase.database().ref('/todo/')
    refRoot.push({ todo: this.refs.todo.value })
  }

  itemRemove(val) {
    let refRoot = firebase.database().ref(`/todo/${val.id}`)
    refRoot.remove().then((i) => {

      let allTodos = this.state.todos;
      let removeIndex;
      for (var i = 0; i < allTodos.length; i++) {
        if (allTodos[i].id === val.id) {
          removeIndex = i
        }
      }
      allTodos = allTodos.slice(0, removeIndex).concat(allTodos.slice(removeIndex + 1))
      this.setState({ todos: allTodos })
      // console.log(allTodos)
    })
  }


  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Todo</h2>

        <form onSubmit={this.addTodo}>
          <input type="text" ref="todo" placeholder="Write your todo" />
          <button>Add Todo</button>
        </form>
        {this.state.todos.map((value, index) => {
          return (
            <h2 key={index}>
              {value.todo}
              <button onClick={this.itemRemove.bind(this, value)}>
                Remove</button>
            </h2>
          )
        })}
      </div>
    );
  }
}

export default App;
