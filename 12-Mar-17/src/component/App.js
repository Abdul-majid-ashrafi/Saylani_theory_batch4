import React, { Component } from 'react';
import firebase from 'firebase'



  componentWillMount() {
    const obj = {
      name: "Majid",
      id: 11
    }
    var arr = firebase.database().ref().child('/saylani')
    arr.push(obj);
  }
  componentDidMount() {
    var arr = firebase.database().ref().child('/saylani')
    arr.on('value', (snapshot) => {
      console.log(snapshot.val())
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Firebase Read/Write</h2>
      </div>
    );
  }
}

export default App;
