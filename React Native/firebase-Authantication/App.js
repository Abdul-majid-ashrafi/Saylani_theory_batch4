import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common'
import * as firebase from 'firebase'
import { SignupForm, LoginForm } from './src/components'

export default class App extends React.Component {
  state = { loggedIn: false }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      
    };
    firebase.initializeApp(config);
    this.checkAuthantication()
  }

  checkAuthantication() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: true })
    })
    this.setState({ loggedIn: false })
  }




  render() {
    return (
      <View>
        <Header headerText={'Authantication'} />
        <LoginForm />
        {/*<SignupForm />*/}
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
      </View>
    );
  }
}
