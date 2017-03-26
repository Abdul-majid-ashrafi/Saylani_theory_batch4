import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';



import firebase from 'firebase'

// Initialize Firebase
var config = {

};
firebase.initializeApp(config);



ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
