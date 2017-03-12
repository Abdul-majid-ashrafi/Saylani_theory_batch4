import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
