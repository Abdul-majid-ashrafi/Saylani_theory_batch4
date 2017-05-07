import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common'
import * as firebase from 'firebase'
import { SignupForm } from './src/components'

export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
     
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText={'Authantication'} />
        <SignupForm />
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
      </View>
    );
  }
}
